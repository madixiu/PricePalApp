
export function twoDigitTruncator(input) {
  input = input*100
  input = Math.trunc(input)
  return input/100
}

export function priceOptimizer(input) {
  let number
  if (input > 1000 )
   number = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  else number = input.toString()
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

export function latinToArabicNumerals(latinNum) {
  const arabicNumerals = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹'
};

  let arabicNum = '';
  // let isComma = false;

  for (const char of latinNum) {
      if (char === ',') {
          arabicNum += '٬'; // Arabic comma
          // arabicNum += char;
          // isComma = true;
        } else {
            
          arabicNum += arabicNumerals[char];
      }
  }

  return arabicNum;
}
