<template>
  <div>
    <span id="count" :class="{ active: isActive }">{{ count }}</span>
    <span id="message">&nbsp;{{ t("message") }}&nbsp;</span>
    <span id="next-prayer" :class="{ active: isActive }">{{ waktu }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { formatDistanceToNow, differenceInMinutes } from "date-fns";
import { ms, ar } from "date-fns/locale";

import { useTimeProcessor } from "@/composables/useTimeProcessor";

export default {
  name: "PrayerCountDown",

  props: {
    nextPrayerTimeData: {
      type: Object,
      required: true,
      default: () => ({
        time: new Date(2021, 3, 3, 15, 40, 0),
        name: "imsak",
      }),
    },
    state: {
      type: String,
      required: true,
      default: "brunei",
    },
  },

  setup(props) {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    const { processedTime } = useTimeProcessor(props.state);

    const count = computed(() => {
      return formatDistanceToNow(
        processedTime.value(props.nextPrayerTimeData.time, props.state),
        {
          locale: locale.value == "ms" ? ms : ar,
        }
      );
    });

    const waktu = computed(() => {
      return t(props.nextPrayerTimeData.name);
    });

    const isActive = computed(() => {
      return (
        differenceInMinutes(
          processedTime.value(props.nextPrayerTimeData.time, props.state),
          new Date()
        ) < 15
      );
    });

    return {
      t,
      count,
      waktu,
      isActive,
    };
  },
};
</script>

<i18n>
{
  "ms": {
    "imsak": "Imsak",
    "message": "lagi kan masuk waktu"
  },
  "ar": {
    "imsak": "Imsak in Arabic",
    "message": "lagi kan masuk waktu in Arabic"
  }
}
</i18n>

<style>
.active {
  @apply text-third;
}
</style>
