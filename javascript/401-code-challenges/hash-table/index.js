'use strict';

let LinkedList = require('../linked-list/index.js');

class HashTable{
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % 1024;
  }

  //set method (add method)
  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};
    //lets check if there is already a bucket at the specified position.
    //if there is, add our data
    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.insert(data);
      //if no bucket exists, create a new bucket aka a LinkedList
    } else {
      let bucket = new LinkedList();
      //insert our data to that bucket
      bucket.insert(data);
      // add our bucket to that position
      this.buckets[position]= bucket;

    }

  }

  //get method(find)

  get(key){
    let position = this.hash(key);
    if (this.buckets[position]){
      let current = this.buckets[position].head;
      while(current){
        let data = current.value;
        if (data[key]){
          return data[key];
        }
        current = current.next;
      }
    }
    return null;
  }

  //contains
  contains(key){
    let position = this.hash(key);
    if(!this.buckets[position]){
      return false;
    } else if(this.buckets[position]){
      let current = this.buckets[position].head;
      while(current){
        let data = current.value;
        if(data[key]){
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

}

module.exports = HashTable;

