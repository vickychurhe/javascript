
console.log("--------------- Step 1 ---------------");
const fruits_Seasonal = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
let firstAtIndex= fruits_Seasonal[0];
let lastAtIndex= fruits_Seasonal[4];
console.log(`The first Element is ${firstAtIndex} and The Last Element is ${lastAtIndex}`);

console.log("--------------- Step 2 ---------------");
const fruits_Seasonal1 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
fruits_Seasonal1.splice(0,0,"Papaya");
console.log(fruits_Seasonal1);

console.log("--------------- Step 3 ---------------");
const fruits_Seasonal2 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
fruits_Seasonal2.splice(3,1);
console.log(fruits_Seasonal2);

console.log("--------------- Step 4 ---------------");
const fruits_Seasonal4 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
fruits_Seasonal4.push("Pineapple")
console.log(fruits_Seasonal4);

console.log("--------------- Step 5 ---------------");
const fruits_Seasonal5 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
fruits_Seasonal5.splice(4,0,"Dragon Fruit")
console.log(fruits_Seasonal5);

console.log("--------------- Step 6 ---------------");
const fruits_Seasonal6 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
fruits_Seasonal6.splice(1,1,"Kiwi")
console.log(fruits_Seasonal6);

console.log("--------------- Step 7 ---------------");
const fruits_Seasonal7 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
let fruit=fruits_Seasonal7.slice(1,4)
console.log(fruit);

console.log("--------------- Step 8 ---------------");
const fruits_Seasonal8 = [ "Banana" , "Orange", "Apple", "Mango", "Water Melon"]
let lastElement=fruits_Seasonal8.slice(fruits_Seasonal8.length-3)
console.log(lastElement);


