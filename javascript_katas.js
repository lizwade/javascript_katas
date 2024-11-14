/* 
LIZ'S LOG OF KATAS TO LEARN JAVASCRIPT

I've written a timeIt function so I can assess how efficient my solutions are
versus other ways of solving the kata kata
*/
function timeIt(functionToTest, args, numOfRuns=100) {
  let timeTaken = 0
  for (i=0; i<numOfRuns; i++){
    const start = performance.now();
    console.log(functionToTest(args));
    const end = performance.now();
    timeTaken += (end-start)
  }
  return (timeTaken/numOfRuns).toFixed(4)+"s";
}



/*
Thu 14 Nov 2024 
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
  return result  
}

//TESTS

let testArg = "39692857276"

fakeBin(testArg);

timeIt(fakeBin, testArg);







