/*
FRI 15th NOV 2024
Greatest Common Divisor
7kyu
https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

Below is the algorithm I devised myself.
It passed all the initial tests but failed a couple on the final exam
*/

function mygcd(m,n){
  
  if (n>m) {
    const temp = m;
    m = n;
    n = temp;
  } // first, ensure we have the smaller integer second
  
  if (m%n === 0) {
    return n; // the higher integer is divisible by the lower, so the lower is the gcd
  }
  return mygcd(m, m%n); // not sure why this works but it seems to!
}

/*
I worked through one of the failures (n=96, m=360) by hand and concluded I had made
a mathematical rather than a coding error, and my algorithm was not quite right.
I coudn't identify the mistake so at this point I had to consult the internet.
It turned out I'd (almost!) discovered Euclid's algorithm. 
With a quick reversal of the arguments in the final line, I was away!
*/





