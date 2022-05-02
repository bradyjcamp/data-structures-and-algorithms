'use strict';

//Find the first repeated word in a book

//Write a function called repeated word that finds the first word to occur more than once in a string
//  Arguments: string
//  Return: string

const HashTable = require('../hash-table/index.js');
let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..';
let table = new HashTable(1024);

function repeatedWord(string){
  let regex = /[!@#$^&*()'";:?.,~]/gm;
  let lowercase = string.toLowerCase();
  let removedPunctuation = lowercase.replace(regex, '');
  let words = removedPunctuation.split(' ');
  // console.log(words);
  for (let i = 0; i < words.length; i ++){
    if(table.contains(words[i])){
      return words[i];
    } else {
      table.set(words[i], words[i]);
    }
    // console.log(table.get(words[i]));
  }
  return null;
}

// repeatedWord(string);

console.log(repeatedWord(string));

module.exports = repeatedWord;
