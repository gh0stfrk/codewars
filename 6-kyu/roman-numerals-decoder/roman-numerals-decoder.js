function solution(roman) {
    const decimal = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let counter = 0;
    let sum = 0;
    for (counter; counter < roman.length; counter++) {
        const currentNumber = decimal[roman[counter]]
        const nextNumber = decimal[roman[counter + 1]] ? decimal[roman[counter + 1]] : 0
​
        if (currentNumber >= nextNumber){
            sum += currentNumber
        }
        else{
            sum += nextNumber - currentNumber;
            counter += 1
        }
​
    }
    return sum;
}