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
    var result
    var firstCharTest = /[!@#$ %^&* (),.?":{}|<>]/g.test(input[0])
    if (firstCharTest) {
      return result = 'invalid number'
    }
    else if (!((/[0-9]/).test(input[0]))) {
      result = 1
    } else {
      var num = input.match(NUMERIC_REGEXP).toString()
      if ((/\//g).test(num)) {
        if (num.match((/\//g)).length > 1) {
          return result = 'invalid number'
        } else {
          result = round(eval(num), 5)
        }
      } else {
        result = input.match(NUMERIC_REGEXP)
      }
    }
    return Number(result);
    
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.indexOf(input.match(ALPHA_REGEX));
    var result = input.slice(firstCharIndex)
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
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      default:
        result = 'invalid unit'
        break
    }
    return result
  };

  this.spellOutUnit = function(unit) {
    let unitLowerCase = unit.toLowerCase()
    let result
    switch (unitLowerCase) {
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
        result = 'invalid input unit'
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
        break
      default:
        result = 'invalid unit'
        break
    }
    return round(result, 5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
