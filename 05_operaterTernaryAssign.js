console.log("----------------------------Step 1-----------------------------------");

function maleMarriageEligibility(gender,age,boyName){

var result= gender=="Male" && age>=21
? `Hey ${boyName} you are eligible for Marriage.`
:"Unfortunately - You are not eligible, Please try next time."; 
console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates")
maleMarriageEligibility("Male", 17, "Stew Jobs")

console.log("----------------------------Step 2-----------------------------------");

function femaleMarriageEligibility(gender,age,girlName){
    var result = gender=="female" && age>=18
    ? `Hey ${girlName} you are eligible for Marriage.`
:"Unfortunately - You are not eligible, Please try next time."; 
console.log(result);
    
}
femaleMarriageEligibility("female", 16, "Jenifer")
femaleMarriageEligibility("female", 27, "Malinda Gates")