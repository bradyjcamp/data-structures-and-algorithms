'use strict';

function mergeSort(arr){
  let n = arr.length;

  if (n > 1){
    let mid = (n/2);
    let left = arr.splice(0, mid);
    let right = arr.splice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);

  }
}

function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i<left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
    }else {
      arr[k] = right[j];
      i += 1;
    }
    k += 1;
  }
  if (i === left.length){
    arr[k] = right[j];
  }else {
    arr[k] = left[i];
  }
}

module.exports = mergeSort;
