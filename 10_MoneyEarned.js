
// 10. A function will take argument age. If age is between 18-60 return true else false. Based on the result, if true multiply the age with 1000 and print “MONEY EARNED: value” else print “NO MONEY”.

function ageChecker(age) {

    return 18 <= age && age <= 60
}

const inputAge = 60;      // Take age input from keyboard

if (ageChecker(inputAge)) {
    console.log("MONEY EARNED: " + (inputAge * 1000))

} else {
    console.log("NO MONEY")
}

