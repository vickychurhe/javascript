
function stringsHandOn(){
    var givenString="   Hey you are doing good, Keep it up    "; 
    console.log(`1 Given String Is : ${givenString}`); 

var result=givenString.length;
console.log(`2 Lenghth Of Stringb Is :${result} `); 

var trimResult= givenString.trim();
console.log(`3 After trim String is : ${trimResult},  The Lenght is : ${trimResult.length}`);

var totalSpacesResult = givenString.length - trimResult.length;
console.log(`4 Total number of space Remove : ${totalSpacesResult}`);

var firstChar = trimResult.charAt(0);
var lastChar = trimResult.charAt(33);
console.log(`5 First Character After Trim : ${firstChar}   Last Character After Trim : ${lastChar}`);

var result = trimResult.split(" ");
console.log(`6 Total word in String : ${result.length}`);

var indexOfgood = trimResult.indexOf("good");
console.log(`7 Index of good Is : ${indexOfgood}`);

var result= trimResult.slice(22);
var resultsubstring= trimResult.substring(22);
console.log(`8 Slice Starting From Index : ${result}   Substring is : ${resultsubstring}`);

var result = trimResult.endsWith("up")
console.log(`9 String End With Word "up" : ${result}`);

var result = trimResult.startsWith("Hey")
console.log(`10 String End With Word "Hey" : ${result}`);


}
stringsHandOn()