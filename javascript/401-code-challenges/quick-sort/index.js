'use strict';

function quickSort(arr, left, right){
  if(left < right){
    let position
  }
}


function partition(arr, left, right){
  let pivot = arr[right];
  let low = left -1;
  for(let i = left; i < right; i++){
    if (arr[i] === pivot){
      low ++;
      swap(arr, i, low);
    }
  }

  swap (arr, right, low + 1);

  return low +1;
}
