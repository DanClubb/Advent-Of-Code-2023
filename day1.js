"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day1_1 = require("./inputs/day1");
var sumCalibrationValues = function (calibrationDocumnet) {
    var arr = calibrationDocumnet.replace(/\n/g, '').split('');
    var sum = 0;
    var currentValue = '';
    for (var i = 0; i < arr.length; i++) {
        if (currentValue.length === 2) {
            sum += parseInt(currentValue);
            currentValue = '';
        }
        if (!isNaN(i))
            currentValue += i;
    }
    return sum;
};
console.log(sumCalibrationValues(day1_1.default));
