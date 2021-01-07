// 7kyu

function redacted(doc1, doc2) {
  newLines1 = doc1.match(/\n/g);
  newLines2 = doc2.match(/\n/g);
  if (newLines1 && newLines2) {
    if ((newLines1.length != newLines2.length) | 0) return false;
  }
  if (doc1.length != doc2.length) return false;
  let result = true;
  let arr2 = doc2.split("");
  arr2.forEach((char, i) => {
    if (char == doc1[i] || doc1[i] == "X") {
    } else {
      result = false;
    }
  });
  return result;
}

var doc1 =
  "TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:XXXXXXXXXXXXXXXXXX";
var doc2 =
  "TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1";

// var doc1 =
//   "XXXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXX\nXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXX XXXXX";
// var doc2 =
//   "Area-51. Medical Report. 23/Oct/1969\nE.T. subject 4 was given an asprin after reporting sick for duty today";

console.log(redacted(doc1, doc2));
