// Video 5.8 accompanies this exercise

// Build out the numStrings function using a for loop that counts all of the
// strings in the array parameter called list.
//
//  - Inside the function, set up a count variable and initialize it to a
//    value of 0. We can use this variable to keep track of the number of
//    strings.
//  - Use a for loop to loop through the list array.
//  - If the typeof the current array index value is equal to "string", then
//    increment the count variable.
//  - Outside the for loop, return the count variable with the total amount
//    of strings found.
//
// Then test out your function in the console, passing in an array of strings
// for the argument.

function numStrings(list) {
    let count = 0
    for(let i = 0; i < list.length; i++){
        if(typeof list[i]==='string'){
            count++
        }
    }
    return count
}

console.log( numStrings(['foo', true, 'tux', 3, function bah() {}, ['hello'], 'yay']))
console.log( numStrings(['a','true', false, 5])); //2
console.log( numStrings([5, '10', 'yooo', 'truck'])); //3
