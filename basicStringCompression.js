/*
Write a function to perform basic string compression.. aabcccccaaa would be come 'a2b1c5a3'. 
*/


let str = "aabcccccaaa"
let strA = "aaaaa"
let strB = "b"
let strNonRepeat = 'abcdef'
let empty = ''
let complex = 'aaabbaaaaccccaaa'
let special = '@@@###$$$%%%^^^'
let caseString = 'aaAAaa'

// What about when the compressed string is longer than the original?  - Non repeating 

function compressString(input) { 

    let output = '';
    let count = 1;  

    for (let i = 0; i < input.length; i++) { 
        if (input[i] === input[i + 1]) { 
            count ++; 
        } else { 
            output += input[i] + count; 
            count = 1; 
        }
    } 
    return output; 
}
console.log(compressString(special)); 