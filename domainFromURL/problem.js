

const domainName = (url) => {
    const regex = /https?:\/\/([^\/]+)/;
    const matched = url.match(regex)

    if (matched) {
        const possibleDomain = matched[1].split('.')
        return possibleDomain[0] !== 'www' ? possibleDomain[0] : possibleDomain[1];
    }
    const withoutProtocol = url.split('.')
    return withoutProtocol[0] !== 'www' ? withoutProtocol[0] : withoutProtocol[1];
}



const sophisticatedMatch = (url)=> {
    return url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/)[1]
}

const urls = [
    "https://www.gmail.com/mail",
    "www.ryzen.com",
    "http://mail.com",
    "gmail.google.com"
];                                                                                                                                                                                                                                              

// urls.forEach(url => console.log(domainName(url)));
// urls.forEach(url => console.log(sophisticatedMatch(url)));

// console.log(domainName('github.com'))

module.exports = {
    domainName
}