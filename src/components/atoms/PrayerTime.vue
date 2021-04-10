<template>
  <div :class="{ active: active }">
    <span id="name" class="text-xl">{{ name }}</span>
    <span id="separator" class="text-xl px-5">:</span>
    <span id="time" class="text-xl">{{ time }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { format } from "date-fns";
import { ms, ar } from "date-fns/locale";

import { useTimeProcessor } from "@/composables/useTimeProcessor";

export default {
  name: "PrayerTime",

  props: {
    prayerTimeData: {
      type: Object,
      required: true,
      default: () => ({
        name: "imsak",
        time: new Date(),
      }),
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
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

    const name = computed(() => {
      return t(props.prayerTimeData.name);
    });

    const time = computed(() => {
      return format(
        processedTime.value(props.prayerTimeData.time, props.state),
        "h:mm a",
        {
          locale: locale.value == "ms" ? ms : ar,
        }
      );
    });

    return {
      name,
      time,
    };
  },
};
</script>

<i18n>
{
  "ms": {
    "imsak": "Imsak"
  },
  "ar": {
    "imsak": "Imsak in Arabic"
  }
}
</i18n>

<style>
.active {
  @apply text-third;
}
</style>
