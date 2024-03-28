// Given 2 strings, write a method to determine if one is a permutation of the other.  

function isPermutation(string1, string2) { 
    if (string1.length !== string2.length) { return false;  }

    const countMap = {}; 
    for (let character of string1) { 
        countMap[character] = (countMap[character] || 0) + 1; 
        console.log(`Character count of ${character} is ${countMap[character]}`)
    }

    return true; 
}


// Test 

console.log(`Permutation ${isPermutation("ABCDDC", "BACCCC")}`); 
//console.log(`Permutation ${isPermutation("ABC", "BACCCD")}`); 
//console.log(`Permutation ${isPermutation("ABC", "CCD")}`); 

