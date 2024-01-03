console.log("-------------------Step 1--------------------");
var isEvenOrOdd = function (num) {
    if (num % 2 == 0) {
      return "EVEN";
    } else {
      return "ODD";
    }
  };

  var result = isEvenOrOdd(45);
  console.log(`45 Given number is ${result}`);
  
  var result = isEvenOrOdd(70);
  console.log(`70 Given number is ${result}`);

  var result = isEvenOrOdd(67);
  console.log(`67 Given number is ${result}`);
  
  var result = isEvenOrOdd(98);
  console.log(`98 Given number is ${result}`);

  console.log("-------------------Step 2--------------------");

var vote = function(age){
    if (age>=18) {
        return "Eligigle For Vote";
    } else {
        return "Not-Eligible Fir Vote"
    }
}
var result= vote(18);
console.log(`18 Age is ${result}`);

var result= vote(20);
console.log(`20 Age is ${result}`);

var result= vote(17);
console.log(`17 Age is ${result}`);

var result= vote(40);
console.log(`40 Age is ${result}`);

console.log("-------------------Step 3--------------------");

var string = function (string){
    if (string.length > 10) {
        console.log(`${string} string contain more than 10 character.`);  
    } else {
        console.log(`${string} string contain not more than 10 character.`);  
    }
}
string("JavaScript-ES6"); 

console.log("-------------------Step 4--------------------");


var checkStart = function (word){
    if (word.startsWith("Java")) {
        console.log(`Given Word : ${word} --- starts with Java...`);
        
    } else {
        console.log(`Given Word : ${word} --- dose not starts with Java...`);
    }
}
checkStart("JavaScript Language");