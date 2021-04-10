const { computed } = require("vue");
const { addMinutes } = require("date-fns");

const district = {
  brunei: 0,
  tutong: 1,
  belait: 3
}

const processedTime = computed(() => {
  return (originalTime, selectedDistrict = 'brunei') => {
    return addMinutes(originalTime, district[selectedDistrict])
  }
})

export const useTimeProcessor = () => {

  return {
    processedTime
  }
}