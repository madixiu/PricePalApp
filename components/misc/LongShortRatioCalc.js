
export default function LongShortRatioCalc(Long,Short) {
  let total = Long + Short;
  let LongPercentage = (Long*100) / total
  let ShortPercentage = (Short*100) / total
  Long = Math.trunc(Long)
  Short = Math.trunc(Short)
  let result = {'Long':Long,'Short':Short,'LongPercentage':LongPercentage,'ShortPercentage':ShortPercentage}
  return result
}
