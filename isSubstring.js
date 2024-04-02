/*
1.8 Is substring: 
  
Assume you have a method "is substring "which checks if one word is a sustring of another.
 Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one call to 'isSubstring'.
 
 eg. S1 = "waterbottle" and S2 = "erbottlewat"

 Test would be that because the string characters are in the same order.. S1 must be a substring of S2+S2.  

 "waterbottle" is a substring of "erbottlewat" + "erbottlewat"
 */

 const s1 = "waterbottle"
 const s2 = "erbottlewat"

 function isRotation(string1, string2) { 

    // check to see if boths strings are the same length and not empty.. this is an easy check
    if (s1.length === s2.length && s1.length > 0) { 
        s2Concatinated = s2 + s2; 

        return s2Concatinated.includes(s1); 
    }
    return false; 
 }
 
 const testCases = [
    { S1: "waterbottle", S2: "erbottlewat" },
    { S1: "a", S2: "a" },
    { S1: "abcde", S2: "abfgh" },
    { S1: "abcde", S2: "edcba" },
    { S1: "abc", S2: "defgh" },
    { S1: "", S2: "" },
    { S1: "hello world", S2: "world hello" },
    { S1: "aaaa", S2: "aaaa" },
    { S1: "abab", S2: "baba" },
    { S1: "hello, world!", S2: "world! hello," }
  ];

  testCases.forEach(testCase => {
    const result = isRotation(testCase.S1, testCase.S2);
    console.log(`Testing if '${testCase.S2}' is a rotation of '${testCase.S1}': ${result}`);
});