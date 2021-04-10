import PrayerTime from '@/components/atoms/PrayerTime.vue';

export default {
  title: 'Atoms/PrayerTime',
  component: PrayerTime,
  argTypes: {
    state: { control: { type: 'select', options: ['brunei', 'tutong', 'belait'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PrayerTime },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PrayerTime v-bind="args" />',
});

export const Inactive1 = Template.bind({});
Inactive1.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 1, 1)
  },
};

export const Inactive2 = Template.bind({});
Inactive2.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 11, 11)
  }
};

export const Inactive3 = Template.bind({});
Inactive3.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 13, 1)
  }
};

export const Inactive4 = Template.bind({});
Inactive4.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 23, 11)
  }
};

export const Active = Template.bind({});
Active.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 1, 0)
  },
  active: true
};

export const Tutong = Template.bind({});
Tutong.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 1, 0)
  },
  active: true,
  state: 'tutong'
};

export const Belait = Template.bind({});
Belait.args = {
  prayerTimeData: {
    name: "imsak",
    time: new Date(2020, 0, 1, 1, 0)
  },
  active: true,
  state: 'belait'
};
