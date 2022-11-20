
// 11.Write a function that reverses a number.

function getReverse(num) {


    const numStr = num.toString()

    let rev = ''

    for (i = numStr.length - 1; i >= 0; i--) {
        rev += numStr[i]
    }

    return +rev
}

const inputNum = 3256    // Input a number from key board
console.log("Entered Number: " + inputNum)

console.log("Reversed Number: " + getReverse(inputNum))