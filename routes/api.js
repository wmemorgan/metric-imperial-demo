/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      console.log('input is: ', input)
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      const answer = () => {
        if (!initNum && returnUnit === 'invalid unit') {
          return 'invalid number and unit'
        } else if (!initNum) {
            return 'invalid number'
        } else if (returnUnit === 'invalid unit') {
            return 'invalid unit'
        } else {
            return { initNum, initUnit, returnNum, returnNum, returnUnit, string: toString }
        } 
      }

      res.json(answer())
    });
};
