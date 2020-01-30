import {chipher} from "./keyholderObj.js"

document.querySelector('#btn').addEventListener('click', encryptText)
function encryptText(){
let plainText = document.querySelector('#plainText').value;
let key = document.querySelector('#key').value;

// Check if letter else
if (isNaN(key)) {
  chipher.newKey(key)
} else {
  chipher.newNum(key)
};

let encryptResult = chipher.encrypt(plainText);

document.querySelector('#plainText').value = encryptResult;
}


document.querySelector('#btn2').addEventListener('click', decryptText)
function decryptText(){
let plainText = document.querySelector('#plainText').value;
let key = document.querySelector('#key').value;

// Check if letter else
if (isNaN(key)) {
  chipher.newKey(key)
} else {
  chipher.newNum(key)
};

let encryptResult = chipher.encrypt(plainText, true);

document.querySelector('#plainText').value = encryptResult;
}
