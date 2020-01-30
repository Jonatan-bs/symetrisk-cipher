// String to encrypt
let str = "a b c";

// Caesar encrypt function
function encryptCaesar(string){
let encryptet ="";

// Remove whitespace
string = string.replace(/\s/g, "");

[...string].forEach(letter => {

// Convert letter to number
let letter2num = (letter.charCodeAt(0) - 96)

// Add 3 to number
let newLetter = letter2num+3

// Convert number to letter
let num2letter = String.fromCharCode(96 + newLetter)

// add new letter to encryptet string
encryptet += num2letter;
})

return encryptet
}

encryptCaesar(str)
