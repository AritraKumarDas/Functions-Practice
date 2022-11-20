
// 13. Write a JavaScript function that returns array elements larger than a number.

function filterArray(arr, num) {

    return arr.filter(item => item > num)

}

const inputArr = [25, 36, -45, 142, 89, 12, 47, 69, 55] // Take input array

const inputNum = 50;  // Take input number

console.log("Input Array: " + inputArr)

const newArr = filterArray(inputArr, inputNum)

console.log(`Array with elements greater than ${inputNum} only:\n${newArr}`);