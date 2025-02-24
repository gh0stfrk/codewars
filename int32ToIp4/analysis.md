## Int32 to IP4

- Given an unsigned 32 bit integer representation of an IP4 addr, we are expected to return the IP4 addr in the classical 4 octet notation.

- Follwing is the de-constructed logic

```text
input  ->  2149583361
output ->  128.32.10.1
```

- To get from input to output we have to first understand the input, it is an 32bit signed integer, converting the input to binary gives us

```text
10000000001000000000101000000001 
```

This is the binary representation of the output, each 8 bits represent a octect from left to right, now we can split and convert it back to
decimal and we shall get the IP4 addr.

## Flow Control

- The input can be any unsigned 32 bit integer, we will convert the integer into an binary number padded by "0"s upto 32 length

```javascript
const u32int = [ 32 ]
u32int.forEach((integer) => integer.toString(2).padStart(32, "0"))
// 00000000000000000000000000100000
```

- After converting the decimal to binary we will splice it on intervals of 8 characters to get octets.

```javascript
const sliceAtIntervals = (str, interval=8) => {
    let arr = []
    for (let i = 0; i < str.length; i += interval) {
        arr.push(str.slice(i, i + interval))
    }
    return arr
}
```

- These 4 octets will then be converted to decimal numbers and will be converted to dotted decimal representation of IP4 address
"x.x.x.x".

```javascript
    const arrOfOctets = sliceAtIntervals(binaryIP)
    arrOfOctets.forEach((octet, index) => {
        arrOfOctets[index] = parseInt(octet, 2)
    })

    arrOfOctets.join(".") // 0.0.0.32
```
