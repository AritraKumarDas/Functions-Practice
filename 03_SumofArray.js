
// 3. A function to take an array and return the sum.

function arraySum(arr) {
    let sum = 0
    arr.forEach(item => sum += item)

    return sum;
}

const inputArray = [5, 10, 15, 20]   // Take inputs here

const result = arraySum(inputArray)

console.log("Input Array: " + inputArray)
console.log("Sum of the Array elements: " + result)

