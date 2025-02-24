// const binaryIP = "10000000001000000000101000000001"
const binaryIP = "00000000000000000001101010000101"


const sliceAtIntervals = (str, interval=8) => {
    let arr = []
    for (let i = 0; i < str.length; i += interval) {
        arr.push(str.slice(i, i + interval))
    }
    return arr
}

const binaryToDecimal = (str) => {
    return parseInt(str, 2)
}

const decimalToBinary = (num) => {
    return num.toString(2).padStart(32, "0")
}

function process(int32){
    const binaryIP = decimalToBinary(int32)
    const arrOfOctets = sliceAtIntervals(binaryIP)
    arrOfOctets.forEach((octet, index) => {
        arrOfOctets[index] = binaryToDecimal(octet)
    })
    return arrOfOctets.join(".")
}


// console.log(arrOfOctets.join("."))



const u32Integers = [
    2149583361, 2154959208, 32, 0
]

u32Integers.forEach((int) => {
    console.log(process(int))
})
