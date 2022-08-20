import { MEASUREMENT } from "config"

const findMeasurements = (item) =>
  Object.keys(item)
    .filter((key) => item[key] && key.startsWith(MEASUREMENT))
    .map((ingredient) => item[ingredient])

export default findMeasurements
