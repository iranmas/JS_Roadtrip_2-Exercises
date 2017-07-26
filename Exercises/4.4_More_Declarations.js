// Video 4.1 accompanies this exercise

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value. Be careful to think about the possibility of
// equality as well and return one of the numbers. Then test your function
// by calling it with two different numbers and again with two equal numbers.

function max0f2(text1, text2){
    if (text1 > text2) {
        return text1
    }
    else {
        return text2
    }
    // else if (text1 < text2){
    //     return text2
    // }
}
console.log( max0f2(2, 4));
console.log( max0f2(1, 4));
console.log( max0f2(24, 6));
console.log( max0f2(3, 4));
