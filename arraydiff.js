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
