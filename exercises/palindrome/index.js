// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
 let pal = str.split('').reverse().join('')
//  if (pal === str) return true  // my code
return str === pal //his syntax both work 
}


//SECOND OPTION - makes use of every() array helper
//not an ideal situation because you have to do more checks then necessary-- double comparison 

const palindrome2 = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1] 
    })
}
module.exports = palindrome;
