/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const NUMERIC_REGEXP = /[-]{0,1}[\d]*[\.]{0,1}[\d\/]+/g;
  const ALPHA_REGEX = /[A-Za-z]+/g;
  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  this.getNum = function(input) {
    if(!((/[0-9]/).test(input[0]))) {
      console.log(`There were no numbers in the input string`)
      var result = 1
    } else {
      var num = input.match(NUMERIC_REGEXP).toString()
      console.log(`num is: `, num)
      if ((/\//g).test(num)) {
        var result = round(eval(num), 5)
        console.log(`You've got a fraction the quotient is: ${result}`)
      } else {
        var result = input.match(NUMERIC_REGEXP)
      }
      console.log(`getNum result is: `, result) 
    }
    return result;
    
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.indexOf(input.match(ALPHA_REGEX));
    console.log(`A letter first appears in this index: `, firstCharIndex)
    var result = input.slice(firstCharIndex)
    console.log(`getUnit result is: `, result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase()
    let result
    switch (unit) {
      case 'gal':
        result = 'L'
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'Kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
      default:
        result = 'invalid unit'
        break
    }
    return result
  };

  this.spellOutUnit = function(unit) {
    let result
    switch (unit) {
      case 'gal':
        result = 'gallons'
        break
      case 'l':
        result = 'liters'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
      default:
        result = 'invalid unit'
        break
    }

    
    return result
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase()
    let result
    switch (unit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm 
        break
      case 'km':
        result = initNum / miToKm
      default:
        result = 'invalid unit'
        break
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${round(returnNum, 5)} ${this.spellOutUnit(returnUnit)}`
    console.log(result)
    return result;
  };
  
}

module.exports = ConvertHandler;
