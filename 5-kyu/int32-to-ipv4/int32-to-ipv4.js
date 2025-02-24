function int32ToIp(int32){
  const binaryIP = int32.toString(2).padStart(32, "0")
  const octets = sliceAtIntervals(binaryIP)
  return octets.map((octet)=> parseInt(octet, 2)).join(".")
}
​
const sliceAtIntervals = (str, interval=8) => {
    const arr = []
    for (let i = 0; i < str.length; i += interval) {
        arr.push(str.slice(i, i + interval))
    }
    return arr
}