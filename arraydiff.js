// When I run the tests on this code, the comments show that the logic is sound (I think)
// a holds the correct value, but when I return a, undefined is received
// UNLESS the recursive call has never been made (ie b is empty from the start)
// which makes me think the testing framework is being thrown by the recursion somehow.
// Even if I just return a string, it is received as undefined except where the recursive call is never made

function arrayDiff(a, b) {
  console.log(`a is`);
  console.log(a);
  console.log(`and b is`);
  console.log(b);

  if (b.length === 0) {
    console.log(`b is empty. Returning a which is`);
    console.log(a); // this shows the output the test is expecting
    return a; // this returns undefined, unless the recursive call has never been made, ie b is empty from the start
  } else {
    const toRemove = b.pop();
    console.log(`Popping b. Now b is`);
    console.log(b);
    console.log(`toRemove is ${toRemove}`);

    const filtered = a.filter((element) => element != toRemove);
    console.log(`filtered is`);
    console.log(filtered);
    console.log(`making recursive call`);
    return arrayDiff(filtered, b); /// AHA! I DID NOT HAVE THE WORD "RETURN" HERE. THIS HAS SOLVED EVERYTHING!!
  }
}

//below is a neater solution from other solvers of this kata.
//I'm including it here so I can investigate relative perfomance.
function array_diff_fav(a, b) {
  return a.filter((e) => !b.includes(e));
}

//and here is my solution tidied up
function arrayDiffLiz(a, b) {
  if (b.length === 0) {
    return a;
  } else {
    const toRemove = b.pop();
    const filtered = a.filter((element) => element != toRemove);
    return arrayDiffLiz(filtered, b);
  }
}

//trying them both out
let testValues = [];
testValues = setTestValues();

function setTestValues() {
  return [
    [
      [2, 1, 6, 3],
      [3, 1],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 10],
    ],
  ];
}

// old version - we can't return the time taken when using console.time and console.timeEnd. Boo!
function timeMyFunctionInTheConsole(functionToBeTimed) {
  console.log(...testValues[0]); // display the arguments. remove this later
  console.time(`Testing time taken by ${functionToBeTimed.name}`);
  console.log(functionToBeTimed(...testValues[0])); // call function and display the result (to be sure of correct functioning while inside this test - remove display aspect later)
  console.timeEnd(`Testing time taken by ${functionToBeTimed.name}`);
}

function timeMyFunction(functionToBeTimed) {
  console.log(...testValues[0]); // display the arguments.remove this later
  console.log(`Testing time taken by ${functionToBeTimed.name}`);
  const start = performance.now();
  console.log(functionToBeTimed(...testValues[0])); // call function and display the result (to be sure of correct functioning while inside this test - remove display aspect later)
  const end = performance.now();
  return end - start;
}

console.log("Doing timing tests.");
console.log("First we'll time it with timeMyFunction:");
testValues = setTestValues();
const itTook = timeMyFunction(arrayDiffLiz);
console.log(`itTook is ${itTook}`);
console.log("Then we'll time it with timeMyFunctionInTheConsole:");
testValues = setTestValues();
timeMyFunctionInTheConsole(arrayDiffLiz);
//TODO: Write a function timeNRuns to perform n runs with one implementation and record average time
//TODO: Write a function to compare two performance of two implementations using the timeNruns function
