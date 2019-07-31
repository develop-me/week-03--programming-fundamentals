// Create a function, `timesBy`, that takes an array of numbers and a number as arguments. Return a new array containing each number in the array multiplied by the value of the second argument.

let timesBy = (values, multiplier) => {
    // empty arrray to store results in
    let results = [];

    // standard array loop
    for (let i = 0; i < values.length; i += 1) {
        // store the current value
        let current = values[i];

        // push value multiplied by multiplier into results array
        results.push(current * multiplier);
    }

    // return results array
    return results;
};

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4], 5), // [10, 15, 20]
    timesBy([2, 3, 4, 5, 6, 7], -5), // [-10, -15, -20, -25, -30, -35]
    timesBy([-3, -4, -5, -6], -5), // [15, 20, 25, 30]
);
