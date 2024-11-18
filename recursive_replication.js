/*
MON 18th NOV 2024
Recursive Replication
7kyu
*/


//Playground stuff to understand how arrays work in javascript
const myInt = 42;

let myNum = 42;
typeof(myNum);

myNum = [myNum]; 
typeof(myNum); // myNum was a number, now an array


myNum.push(5, 7, 302, "apples"); // look like this returns length

myNum; // content of array has changed as expected


let arrNum = [...myNum].push("bananas");

typeof(arrNum); // eh? how can this be a number, I expected an object?

arrNum; // oops, I assigned the LENGTH (return value) to arrNum, not a copy of array


//let's split out the instructions:
let newArr = [...myNum]; //ok, this works when myNum is an array

myNum = 51;
//newArr = [...myNum]; //hmm, but gives an error when myNum is a number

//I guess instead of devising an assignment statement that will work whether the argument is a number OR an array, we'll just test whether it IS a number, and if it is, we'll convert it to an array.

 if ( typeof(72) === 'number' ) {
   console.log("Yep, it's a number");
 }


// Let's try and write the function...
function replicate(times, number) {
	if (times < 0) {
    return [];
  }
  else if (times === 0) {
    return number;
  }

  let arrOfNums;
  if ( typeof(number) === 'number' ) { 
    arrOfNums = [number];
  }
  else {
    arrOfNums = number;
    }
  console.log(arrOfNums);
  arrOfNums.push(number);
  //times-=1;
     
  return replicate (times-1, arrOfNums );
  }

  

replicate(4, 22);

//Wow - I don't know what is going on here but tomorrow I need to learn about debugging in the console, because I can't track these variables! Also, something is very wrong here because this is only supposed to be a 7kyu kata!



function replicate2(times, number) {
	if (times < 0) {
    return [];
  }
  else if (times === 0) {
    return number;
  }

  let arrOfNums = [];
  arrOfNums.push(number);
  
  console.log(arrOfNums);
  //times-=1;
     
  return replicate2 (times-1, arrOfNums );
  }

replicate2(4, 22);

