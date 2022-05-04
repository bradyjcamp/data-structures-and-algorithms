'use strict';

const HashTable = require('../hash-table/index.js');

// let hm1 = new HashTable(1024);
// hm1.set('diligent', 'employed');
// hm1.set('fond', 'enamored');
// hm1.set('guide', 'usher');
// hm1.set('outfit', 'garb');
// let hm2 = new HashTable(1024);
// hm2.set('diligent', 'idle');
// hm2.set('fond', 'averse');
// hm2.set('guide', 'follow');


function leftJoin(hashMapOne, hashMapTwo) {
  let bucket;
  let arr = [];
  for (let i = 0; i < hashMapOne.buckets.length; i++) {
    if(hashMapOne.buckets[i]){
      bucket = hashMapOne.buckets[i].head;
    }
    while (bucket) {
      let key = Object.keys(bucket.value)[0];
      if (hashMapTwo.contains(key)) {
        arr.push([key, hashMapOne.get(key), hashMapTwo.get(key)]);
      }
      else {
        arr.push([key, hashMapOne.get(key)]);
      }
      bucket = bucket.next;
    }
  }
  return arr;
}

// console.log(leftJoin(hm1, hm2));

module.exports = leftJoin;
