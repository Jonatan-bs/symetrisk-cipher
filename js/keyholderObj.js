// Hey holder object

export let chipher = {
key:"abc",
num: 123,

// Convert key to numbers
key2num(){
this.num="";
[...this.key].forEach(letter => {
let letter2num = (letter.charCodeAt(0) - 96)
this.num+=letter2num;
})
},

// Change key and
newKey(key){
this.key = key;
this.key2num()
},

// Set number
newNum(num){
this.num = num;
},

// encrypt function
encrypt(string, reverse){
let encryptet ="";

// Remove whitespace
string = string.replace(/\s/g, "");
string = string.toLowerCase()

// Loop through each letter
for (var i = 0; i < [...string].length; i++) {

// letter
let letter = [...string][i]

// Number length
let numLength = this.num.toString().length

// current shift amount
let shift = this.num.toString().charAt(i%numLength)
shift = Number(shift)

// Convert letter to number
let letter2num = (letter.charCodeAt(0) - 96)

// Make shift
let newNum;
if (reverse) {
  newNum = letter2num-shift
} else {
  newNum = letter2num+shift
}

// loop alphabet
newNum = newNum%26

// start from 26 if newnum less than 0
if (newNum<1) {
  newNum = 26+newNum;
}

// Convert number to letter
let num2letter = String.fromCharCode(96 + newNum)

// add new letter to encryptet string
encryptet += num2letter;
}

return encryptet
}
};





// String to encrypt
let str = "a b c";
chipher.encrypt(str)
