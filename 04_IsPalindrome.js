
// 4. A function to take a string and return true/false if palindrome

function isPalindrome(str) {

    const length = str.length;
    const mid = length / 2;

    for (i = 0; i < mid; i++) {
        if (str[i].toLowerCase() !== str[length - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

const inputString = "Malayalam";    // Take string input here

console.log("Input String: " + inputString)

if (isPalindrome(inputString)) {
    console.log("The input string is a Palindrome!")
} else {
    console.log("Sorry, the input string is not a Palindrome.")
}