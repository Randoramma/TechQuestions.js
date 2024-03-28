
/**
 1.1 Determine if a string has all unique characters. What if you can't use additional data structures?
 */

 function hasRepeatingElements(input) { 

    const characterSet = new Set(input); 

    console.log(`This Set size is = ${characterSet.size}`); 
    console.log(`This string length is = ${input.length}`); 
    if (characterSet.size != input.length) {
        return true; 
    }

    return false; 
 }

 console.log(`This string has repeated characters = ${hasRepeatingElements("ABCBBBC")}`); 
 console.log(`This string has repeated characters = ${hasRepeatingElements("ABCDEFG")}`); 

// The below is O(n) without using a Set.  
 function hasRepeatingElementsHard(input) { 
    if (input.length > 256) return true; 

    const characterMap = {}; 
    
    for (let character of input) {

        if (characterMap[character]) { 
            return true; 
        }
        characterMap[character] = true; 
    }
    return false; 
 }
 console.log(`This string has repeated characters = ${hasRepeatingElementsHard("ABCBBBC")}`); 
 console.log(`This string has repeated characters = ${hasRepeatingElementsHard("ABCDEFG")}`); 