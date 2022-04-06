'use strict';

const { Stack } = require('../stack-and-queue/index.js');

function validateBrackets(str){
  let arr = str.split('');
  let openSquare = new Stack();
  let closeSquare = new Stack();
  let openCurly = new Stack();
  let closeCurly = new Stack();
  let openParen = new Stack();
  let closeParen = new Stack();
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === '['){
      openSquare.push(arr[i]);
    } else if(arr[i] === ']'){
      closeSquare.push(arr[i]);
    } else if(arr[i] === '{'){
      openCurly.push(arr[i]);
    } else if(arr[i] === '}'){
      closeCurly.push(arr[i]);
    } else if(arr[i] === '('){
      openParen.push(arr[i]);
    } else if(arr[i] === ')'){
      closeParen.push(arr[i]);
    }
  }
  if (openSquare.length === closeSquare.length && openCurly.length === closeCurly.length && openParen.length === closeParen.length){
    return true;
  }
  return false;
}

module.exports = validateBrackets;
