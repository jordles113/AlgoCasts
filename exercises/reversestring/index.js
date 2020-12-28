// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1 -- using built in methods -- my solution

function reverse(str) {
    return str.split('').reverse().join('');
}

// SOLUTION 2 -- For Loop

function reverse2(str) {
    let reversed = ''; 
    
    for (let character of str) {
        reversed = character + reversed; 
    }
    return reversed
}


//SOLUTION 3 -- array helper most complicated solve

 function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
 }

module.exports = reverse;