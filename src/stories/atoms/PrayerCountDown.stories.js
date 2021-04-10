import PrayerCountDown from '@/components/atoms/PrayerCountDown.vue';
import { addMinutes } from 'date-fns';

export default {
  title: 'Atoms/PrayerCountDown',
  component: PrayerCountDown,
  argTypes: {
    state: { control: { type: 'select', options: ['brunei', 'tutong', 'belait'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PrayerCountDown },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PrayerCountDown v-bind="args" />',
});

export const Active = Template.bind({});
Active.args = {
  nextPrayerTimeData: {
    name: "Imsak",
    time: addMinutes(new Date(), 10)
  },
  state: 'brunei'
};

export const Inactive = Template.bind({});
Inactive.args = {
  nextPrayerTimeData: {
    name: "Imsak",
    time: addMinutes(new Date(), 30)
  },
  state: 'brunei'
};

export const Tutong = Template.bind({});
Tutong.args = {
  nextPrayerTimeData: {
    name: "Imsak",
    time: addMinutes(new Date(), 30)
  },
  state: 'tutong'
};

export const Belait = Template.bind({});
Belait.args = {
  nextPrayerTimeData: {
    name: "Imsak",
    time: addMinutes(new Date(), 30)
  },
  state: 'belait'
};
