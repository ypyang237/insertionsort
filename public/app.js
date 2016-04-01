var messyArr = [3,1,5,8,4,4,4,4,4,3,2];


function insertionSort(arr) {
  var sorted = [];
  var unsorted = arr;
  sorted.push(arr[0]);
  arr.shift();


  for(var i = 0; i < arr.length; i++) {
  var c = sorted.length;
    for(var j = 0; j < c; j++) {

      if(unsorted[i] > sorted[j] && unsorted[i]<= sorted[j+1]) {
        sorted.splice((j+1), 0, unsorted[i]);
        break;
      } else if (unsorted[i] < sorted[0]){
        sorted.unshift(unsorted[i]);
      } else if (unsorted[i] > sorted[sorted.length-1]){
        sorted.push(unsorted[i]);
        break;

      }
    }
  } //end of big for

  return sorted;
}

console.log('Answer: ', insertionSort(messyArr));
// module.exports = insertionSort;