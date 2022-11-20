
// 9. Take a string (“I AM RAM DATTA”) in a function argument. Return a string with “-” replacing the white spaces. (“I-AM-RAM-DATTA”).

function replaceSpace(str) {

    return str.replaceAll(' ', '-')
}

const inputStr = "I AM RAM DATTA"   // Take input here

console.log("Original String: " + inputStr)

console.log("New String: " + replaceSpace(inputStr.trim()))

