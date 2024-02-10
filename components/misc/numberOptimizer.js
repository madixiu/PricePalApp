
export function twoDigitTruncator(input) {
  input = input*100
  input = Math.trunc(input)
  return input/100
}

export function priceOptimizer(input) {
  let number
  if (input > 1000 )
   number = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  else number = input
  return number
}

export function bigNumberOptimizer(input) {
  let number
  if (input > 1000 )
   number = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  else number = input
  return number
}

export function absNumber(num) {
  num = parseFloat(num)
  if (num < 0)
  return num * -1
  else return num
}