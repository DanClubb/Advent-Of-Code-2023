import calibrationDocumnet from "./inputs/day1";


const sumCalibrationValues = (calibrationDocumnet): number => {
    const arr = calibrationDocumnet.replace(/\n/g, '').split('');

    let sum = 0;
    let currentValue = '';
    
    for (let i = 0; i < arr.length; i++) {
        if(currentValue.length === 2) {
            sum += parseInt(currentValue)
            currentValue = ''
        }
        if (!isNaN(i)) currentValue += i
    }

    return sum
}

console.log(sumCalibrationValues(calibrationDocumnet))