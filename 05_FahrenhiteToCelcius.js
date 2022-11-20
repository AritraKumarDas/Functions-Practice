
// 5. A function to take F and convert to C.

function tempConvert(fahrenhite) {

    const celcius = (fahrenhite - 32) * 5 / 9
    return celcius;
}

const tempInFahrenhite = 32

const tempInCelcius = tempConvert(tempInFahrenhite);

console.log("Temp input in Fahrenhite: " + tempInFahrenhite)

console.log("Equivalent Temp in Celcius: " + tempInCelcius.toFixed(2))