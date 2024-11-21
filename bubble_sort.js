function bubble(myList) {
    
  let snapshots = [];
  let toBubble;
  let passCompletedWithNoSwaps; 

  if (myList.length === 0) { 
    return snapshots;
  }

  for (let passNum=0; passNum < myList.length; passNum++) {
    passCompletedWithNoSwaps = true;
    //console.log("\nThis is Pass number " + passNum + ". Examining list");
    //console.log(myList);
      
    for (let i=0; i<myList.length-1; i++) { // this loop performs one pass
      //console.log("Focusing on " + myList[i]);
      if (myList[i] > myList[i+1]) {
        passCompletedWithNoSwaps = false;
        //console.log("Swapping " + myList[i] + " with " + myList[i+1] );
        toBubble = myList[i];
        myList[i] = myList[i+1];
        myList[i+1] = toBubble;
        //console.log("Now list is " + myList);
        snapshots.push(structuredClone(myList)); // without this we only push a REFERENCE to myList, so contents change later
        //console.log("Now snapshots is ");
        //console.log(snapshots);
      }
      else {
        //console.log("No switch required");
      }
    }
    if (passCompletedWithNoSwaps) {
      //console.log("We managed a pass with no switches, so we're done!");
      //console.log("Returning");
      //console.log(snapshots);
      return snapshots;
    }
  } 
}