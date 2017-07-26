// Video 1.1 accompanies this exercise

// Write a basic while loop that prints to the console all
// the numbers from 10 to 1 in descending order. We’ve given you a starting
// variable to get the wheels turning. Use the code below in your solution.

let num = 10;

console.log('start loop');
// >=
while (num > 0) {
    if (num % 2  === 1) {
        console.log(num);
        //num = num - 1
        //num -= 1
    }
    num--
}

console.log(`End ${num}`);
