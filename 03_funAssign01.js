console.log("----------Que 1----------");

function square(){
console.log("Function With No Argument and No Return Value.");
}
square();

function multiply(){
    console.log("One More Function With No Argument and No Return Value.");
    }
    multiply();

console.log("----------Que 2----------");

function personalDetails(firstName, lastName, collageName){
    console.log("My First Name is :", firstName);
    console.log("My Last Name is :", lastName);
    console.log("My Collage Name is :", collageName);
    }
    personalDetails("Vijay", "Churhe", "SSCET Chandrapur");

console.log("----------Que 3----------");

function swapValue(n1, n2){
    console.log("Before Swap :");
    console.log(n1);
    console.log(n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After Swap :");
    console.log(n1);
    console.log(n2);
  
}
swapValue("Virat","Anushka");
swapValue(1000,2000)

console.log("----------Que 4----------");

function addThreeValue(n1,n2,n3){
    console.log("Given value is :", n1,n2,n3);
    var result = n1 + n2+ n3;
    console.log("Result :",result);
}
addThreeValue(10.23, 600, 40)
addThreeValue("Hello", "Good", "Morning")