

const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11]
console.log("-------------------- STEP 1 ---------------------");
let arraylength = arrayNumber.length
console.log(`The Length Of Array is - ${arraylength}`);

console.log("-------------------- STEP 2 ---------------------");
let first = arrayNumber[0]
let last = arrayNumber[arrayNumber.length-1]
console.log(`The First Element is - ${first}`);
console.log(`The Last Element is - ${last}`);

console.log("-------------------- STEP 3 ---------------------");
console.log(`Last 3RD Element is ${arrayNumber[arrayNumber.length-3]}`);

console.log("-------------------- STEP 4 ---------------------");
console.log('Even Number is');
for (let element of arrayNumber) {
    if (element%2==0) {
    console.log(element);    
    }
}
console.log(" ");

console.log("-------------------- STEP 5 ---------------------");
console.log('Odd Number is');
for (let element of arrayNumber) {
    if (element%2==1) {
    console.log(element);    
    }
}
console.log(" ");

console.log("-------------------- STEP 6 ---------------------");
sum=0;
for (const element in arrayNumber) {
    if (element%2==0) {
        console.log(arrayNumber[element]);
        sum=sum+arrayNumber[element];
    }
    
}
console.log(`Sum of even positioned element - ${sum}`);

console.log("-------------------- STEP 7 ---------------------");
sum=0;
for (const element in arrayNumber) {
    if (element%2!=0) {
        const eachElement = arrayNumber[element];
        console.log(eachElement);
        sum+=eachElement
        
    }
}
console.log(`Sum of odd positioned element - ${sum}`);

console.log("-------------------- STEP 8 ---------------------");
let totalSum=0;
for (const element of arrayNumber) {
    totalSum=totalSum+element;
}
console.log(`Sum of the All numbers - ${totalSum}`); 


console.log("-------------------- STEP 9 ---------------------");
for (const index in arrayNumber) {
    if (arrayNumber[index]%5==0) {
console.log(`${arrayNumber[index]}`);        
    }
}


console.log("-------------------- STEP 10 ---------------------");
console.log(`These Element Available 115 `);
console.log(arrayNumber.includes(115));

console.log("-------------------- STEP 11 ---------------------");
console.log(`These Element Available 23 `);
console.log(arrayNumber.includes(23));

console.log("-------------------- STEP 12 ---------------------");
arrayNumber.splice(3,0,55,66)
console.log(arrayNumber);

console.log("-------------------- STEP 13 ---------------------");
console.log(`After The Deleting from Index 4 to Next 3 Element`);
arrayNumber.splice(4,3);
console.log(arrayNumber);
