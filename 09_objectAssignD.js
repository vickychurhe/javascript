let professor = {
    firstName: "Vijay",
    age: 28,
    isMarried: true,
    weight: 70,
    city: "Chandrapur",
    degree: {
        engineering: "CSC",
        PHD: "Adv Computing",
    },
    certificates: ["Hacker Rank Participation", "Certificate in IFE Course", "Certificate In Adv Programming"],

}
console.log('--------------------------------------- STEP 1-----------------------------------------');
console.log(professor);

console.log('--------------------------------------- STEP 2-----------------------------------------');
professor.degree
console.log(professor.degree);

console.log('--------------------------------------- STEP 3-----------------------------------------');
professor.certificates
console.table(professor.certificates);

console.log('--------------------------------------- STEP 4-----------------------------------------');
let professor2 = {
    firstName: "Vijay",
    age: 28,
    isMarried: true,
    weight: 70,
}
professor2.totalExperience=14;
console.table(professor2);

console.log('--------------------------------------- STEP 5-----------------------------------------');
professor.isMarried = false; // Update
console.log(professor);

console.log('--------------------------------------- STEP 6-----------------------------------------');
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);

console.log('--------------------------------------- STEP 7-----------------------------------------');
let arraylength=professor.certificates.length;
console.log("Last Element Of Arrey is--",professor.certificates[arraylength-1]);


console.log('--------------------------------------- STEP 8-----------------------------------------');
console.log(professor);
console.log('--------------------------------------- STEP 9-----------------------------------------');
for (const element of professor.certificates) {
    console.log(element);
}