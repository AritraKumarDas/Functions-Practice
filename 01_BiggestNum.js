
// 1. Write a function which will take 3 numbers and return the biggest.


function biggestNum(x, y, z) {

    let biggest = x
    if (y > biggest) {
        biggest = y
    }
    if (z > biggest) {
        biggest = z
    }
    return biggest;

}


console.log("Biggest Num: " + biggestNum(145, 56, 33))