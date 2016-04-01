var messyArr = [3,1,5,8,4,2];


function insertionSort(arr) {
  var sorted = [];
  var unsorted = arr;
  sorted.push(arr[0]);
  arr.shift();
  console.log('sorted is: ', sorted);
  console.log('unsorted is: ', unsorted);

  for(var i = 0; i < 5; i++) {
  var c = sorted.length;
    for(var j = 0; j < c; j++) {

      if(unsorted[i] > sorted[j] && unsorted[i]< sorted[j+1]) {
        console.log(j);
        sorted.splice((j+1), 0, unsorted[i]);
        console.log('here', sorted);
      } else if (unsorted[i] < sorted[0]){
        sorted.unshift(unsorted[i]);
        console.log('here', sorted);
      } else if (unsorted[i] > sorted[sorted.length-1]){
        sorted.push(unsorted[i]);

        console.log('here', sorted);
      }
    }
  } //end of big for
  console.log(sorted);
  return sorted;
}

insertionSort(messyArr);
// module.exports = insertionSort;