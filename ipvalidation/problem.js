function isValidIP(str) {
    if (!str) return false;

    const octets = str.split('.');
    if (octets.length !== 4) return false;

    for (const octet of octets) {
        // Check if the octet contains only digits and no leading zeros
        if (!/^\d+$/.test(octet) || (octet.length > 1 && octet[0] === '0')) {
            return false;
        }

        const intOctet = parseInt(octet, 10);
        if (intOctet < 0 || intOctet > 255) {
            return false;
        }
    }

    return true;
}


// console.log(isValidIP('0.0.0.0'))
// console.log(isValidIP('abc.def.ghi.jkl'))
// console.log(isValidIP('1e0.1e1.1e2.2e2'))

module.exports = {
    isValidIP: isValidIP
}