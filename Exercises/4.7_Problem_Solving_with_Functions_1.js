// Video 4.6 accompanies this exercise

// The oceanologists in Miami Beach divide up the feed
// responsibilities daily for the Goldfish population. Each goldfish needs
// 2 grams of fish feed per day.
//
// Build a function called feedPerOceanologist that takes in:
//
//  - The current population of goldfish.
//  - The number of oceanologists available during the day.
//
// The function should alert the amount of feed that each oceanologist should
// be responsible for on that day. The output should match the following format:
//
//      "Each Oceanologist should load <number> grams of feed today."

function feedPerOceanologist(numOfGoldfish, numOfOcdeanologists) {
    const gramsPerFish = 2
    const totalFoodNeed = numOfGoldfish * gramsPerFish
    const feedForEachOceanologist = totalFoodNeed / numOfOcdeanologists


    console.log(`Each Oceanologistl should load ${feedForEachOceanologist} grams of feed today.`);
}
feedPerOceanologist(800, 2); //800
feedPerOceanologist(1000, 10); //200
feedPerOceanologist(200, 4); //100


// function mystery(x, y) {
//   var a = 4 * x * y;
//   var b = 3 * y + 5;
//   var c = a + b;
//   return c;
// }
