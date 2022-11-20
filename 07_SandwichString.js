
// 7. A function to take a string and return “T” or “F” if it is a sandwich string. If string length is greater than 3, it will return “W”.

function isSandwich(str) {
    if (str.length > 3) {
        return 'W'
    }

    const newStr = str.toLowerCase();

    if ("aeiou".includes(newStr[1]) && !"aeiou".includes(newStr[0]) && !"aeiou".includes(newStr[2])) {
        return 'T';
    } else {
        return 'F';
    }
}

const inputString = "Auk"      // Take input here
console.log("Input String: " + inputString)

switch (isSandwich(inputString)) {
    case 'W':
        console.log("The String Length is greater than 3")
        break;
    case 'T':
        console.log("This is a valid Sandwich String.")
        break;
    case 'F':
        console.log("Not a Sandwich String.")

}