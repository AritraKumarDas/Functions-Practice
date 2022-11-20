
// 14. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.


function getSubsets(arr) {
    let allSubsets = []

    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (i !== j) {
                allSubsets.push([arr[i], arr[j]])
            }
        }

    }

    return allSubsets;

}

const inputArray = [10, 20, 30, 40, 50, 60]  // Take input Array

console.log("Input Array: " + inputArray)

console.log("All Sub Array of length 2:", getSubsets(inputArray))