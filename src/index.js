  module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let special = ['eleven', 'twelve', 'ten'];
  let teens = {
    // 10: 'ten',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }
  let tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }
  let str = number.toString();
  function teenCheck(num) {return Math.floor(num / 10) === 1 ? num : null} 
  
  function makeTeens(n) {
    if(teenCheck(n)) {
      if(n === 11) {
        return special[0];
      } else if(n === 12) {
        return special[1];
      } else if(n === 10) {
        return special[2];
      }
      return teens[n];
    }
  }

  function makeTens(n) {
    let nToStr = n.toString();
    console.log(tens[nToStr[0] * 10])
    if(tens[n]) {
      return tens[n]
    } 
    if (tens[nToStr[0] * 10] && units[nToStr[1]]) {
      return tens[nToStr[0] * 10] + ' ' + units[nToStr[1]]
    }
  }

  function makeUnits(n) { return n.toString().length === 1 ? units[n] : null}

  if(str.length === 3) {
    let hundredEnds = Number(str[1] + str[2])
    let check = Math.floor(number / 100) === Number(str[0]);
    let ends = Number(str[2])
    console.log(makeUnits(ends))
    if(check && str[1] + str[2] === '00') {
      return units[str[0]] + ' hundred'
    } else if (check && str[1] === '0' && units[ends]) {
      return units[str[0]] + ' hundred ' + makeUnits(ends)
    }
    if (check && (hundredEnds == teenCheck(hundredEnds))) {
      return units[str[0]] + ' hundred ' + makeTeens(hundredEnds)
    } else {
      return units[str[0]] + ' hundred ' + makeTens(hundredEnds)
    }
  }
  

  return makeTeens(number) || makeTens(number) || makeUnits(number);
}