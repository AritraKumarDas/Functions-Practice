
// 12. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num) {

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

const inputNum = 2451347;       // Take input number here

console.log("Entered Number: " + inputNum)

console.log(isPrime(inputNum) ? "The number is Prime" : "Not a Prime Number")