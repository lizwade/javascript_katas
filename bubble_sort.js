
//Not quite working. Sorts the list, but doesn't capture the required snapshots correctly
function bubble(myList) {
    let snapshots = [];
    
    for (startingIndex=0; startingIndex < myList.length-1; startingIndex++){
    
      let toBubble;
      for (i=startingIndex; i<myList.length-1; i++) { // this loop performs one pass
        if (myList[i] > myList[i+1]) {
          console.log("Swapping");
          toBubble = myList[i];
          myList[i] = myList[i+1];
          myList[i+1] = toBubble;
          snapshots.push(myList);
        }
      }
    }
    return snapshots;
  }