const { template } = require('@babel/core')
let bmi;
function calculateBMI(weight, height) {
    bmi = weight/Math.pow(height,2)
    return bmi;
}
function getBMIMeaning(weight, height) {
    const bmi1 = bmi
    if(bmi1<18.5){
        console.log("UnderWeight")
    }
    else if(bmi1>=18.5 && bmi1<=24.9){
        console.log("Normal Weight") 
    }
    else if(bmi1 > 24.9){
        console.log("Overweight") 
    }
  
}
module.exports = getBMIMeaning

