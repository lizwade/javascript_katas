/* 
LIZ'S LOG OF KATAS TO LEARN JAVASCRIPT

I've written a timeIt function so I can assess how efficient my solutions are
versus other ways of solving the kata kata
*/
function timeIt(functionToTest, args, numOfRuns=100) {
  let timeTaken = 0
  for (i=0; i<numOfRuns; i++){
    const start = performance.now();
    //console.log(functionToTest(args));
    const end = performance.now();
    timeTaken += (end-start)
  }
  //return (timeTaken/numOfRuns).toFixed(4); // timing 1 run is too erratic
  return (timeTaken).toFixed(4);
}

//TESTS

let testArg;
testArg = "39692857276";

fakeBin(testArg);

console.log("My implementation took " + timeIt(fakeBin, testArg));

console.log("Alt 1 took " + timeIt(fakeBin1, testArg));

console.log("Alt 2 took " + timeIt(fakeBin2, testArg));

console.log("Alt 3 took " + timeIt(fakeBin3, testArg));

console.log("Alt 4 took " + timeIt(fakeBin4, testArg));



/*
Wed 13 Nov 2024 
Fake Binary
8kyu
https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
*/

//MY SOLUTION
function fakeBin(x){
  let result = ""
  for (let i = 0; i < x.length; i++) {
    result += Math.round(x[i]/10);
  }
  return result;  
}


//SOLUTIONS BY OTHERS
function fakeBin1(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


function fakeBin2(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}


function fakeBin3(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}


function fakeBin4(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" );
}












