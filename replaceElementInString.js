console.log("Hello World"); 

let str = "Your string regex here";
let newStr = str.replace(/ /g, "%20");
console.log(newStr);

let str2 = "Your string split here";
let newStr2 = str2.split(" ").join("%20");
console.log(newStr2);

//JavaScript exercise to look at a string of digits, then if the number is less than 5, replace it with '0', and if the number is 5 or greater, replace it with '1'.\

let myArray = [3, 5, 7, 1, 4];

function updateArrayElementsToBool(array) { 

    for (let i= 0; i < array.length; i ++) { 
        array[i] = array[i] < 5 ? 0 : 1; 
    }
    return array; 
}

console.log(myArray); 
console.log("Original modified array:", updateArrayElementsToBool(myArray));