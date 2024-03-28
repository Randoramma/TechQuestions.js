console.log("Run Javascript"); 

// the time complexity of this function is O(n).. due to looping through 1x.  The remaining functions are all O(1). 
function hasRepeatedLetters(str) { 
    // setup Set requiring unique characters only.  
    const characterSet = new Set(); 
    if (str.length > 256) return false; // this is O(1). 
    // for loop through the range of the input string 
    for (let i = 0; i < str.length; i++ ) { 
        const character = str[i]; 
        //  if the set already contains the next character in the string exit out (true)
        if (characterSet.has(character)) { 
            return true; 
        } else {  /* do nothing */ }

        characterSet.add(character); 
    }
    // this string only has unique characters.  
    return false; 
}

console.log(hasRepeatedLetters("albino")); 
console.log(hasRepeatedLetters("aardvark")); 


function hasUniqueCharacters(str) { 

    if (str.length > 256) return false; // this is O(1). 
    const characterSet = new Set(str); // this is an O(n) function time complexity.  

    if (characterSet.size == str.length) { 
        return true
    } else { 
        return false 
    }
}

console.log(hasUniqueCharacters("albino")); // true 
console.log(hasUniqueCharacters("aardvark")); // false 

