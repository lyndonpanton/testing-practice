function reverseString(string) {
    let reversedString = "";

    let i = string.length - 1;

    while (i >= 0) reversedString += string[i--];

    return reversedString;
}

module.exports = reverseString;
