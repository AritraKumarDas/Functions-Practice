
// 6. A function which will take 2 arrays and return the unique names in a new array. Similar to point 12 of Loop.

function getUniques(arrOne, arrTwo) {

    const unique1 = arrOne.filter(item => !arrTwo.includes(item));

    const unique2 = arrTwo.filter(item => !arrOne.includes(item));

    return unique1.concat(unique2);

}

const array1 = ["ram", "shyam", "sandip", "shiva"]
const array2 = ["sanjay", "raghav", "ram", "sandip"]

console.log("Array 1: " + array1)
console.log("Array 2: " + array2)

const uniqueArray = getUniques(array1, array2)

console.log("Unique Names: " + uniqueArray);