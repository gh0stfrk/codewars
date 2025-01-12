function titleCase(title, minorWords) {
    const ignoreWords = [];
    const result = [];

    if (!title) {
        return ""
    }

    if(minorWords){
        minorWords.split(' ').forEach((word) => ignoreWords.push(word.toLowerCase()));
    }

    const words = title.split(' ')

    words.forEach((word, idx) => {
        if (!ignoreWords.includes(word.toLowerCase()) | !idx ) {
            result.push(word.toLowerCase().replace(/(^)\w/g, function (match) {
                return match.toUpperCase()
            }))
        }else{
            result.push(word.toLowerCase())
        }
    })

    return result.join(' ')
}

const testInput = [
    {
        "input": ["a clash of KINGS", 'a an the of'],
        "output": 'A Clash of Kings'
    }
]

// console.log(titleCase(testInput[0].input[0], testInput[0].input[1], testInput[0].output))

module.exports = {
    titleCase
}
