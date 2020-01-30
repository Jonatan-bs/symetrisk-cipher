import {chipher} from "./keyholderObj.js"

document.querySelector('#btn').addEventListener('click', encryptText)
function encryptText(){
let chipherType = document.querySelector('[name=cipher]:checked').value;
let plainText = document.querySelector('#plainText').value;
let key = document.querySelector('#key').value;

if (chipherType=='number') {
  chipher.newNum(key)
} else if (chipherType=='letter') {
  chipher.newKey(key)
};

let encryptResult = chipher.encrypt(plainText);

document.querySelector('#plainText').value = encryptResult;
}


document.querySelector('#btn2').addEventListener('click', decryptText)
function decryptText(){
let chipherType = document.querySelector('[name=cipher]:checked').value;
let plainText = document.querySelector('#plainText').value;
let key = document.querySelector('#key').value;

if (chipherType=='number') {
  chipher.newNum(key)
} else if (chipherType=='letter') {
  chipher.newKey(key)
};

let encryptResult = chipher.encrypt(plainText, true);

document.querySelector('#plainText').value = encryptResult;
}
