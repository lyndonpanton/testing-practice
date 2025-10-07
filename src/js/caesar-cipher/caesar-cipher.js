function caesarCipher(string, shiftFactor) {
    let result = "";
    shiftFactor %= 26;
    shiftFactor = shiftFactor < 0 ? shiftFactor * -1 : shiftFactor;

    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            let newCharCode = string.charCodeAt(i) + shiftFactor;
            
            if (newCharCode > 90) newCharCode -= 26
            
            result += String.fromCharCode(newCharCode);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            let newCharCode = string.charCodeAt(i) + shiftFactor;
            
            if (newCharCode > 122) newCharCode -= 26;

            result += String.fromCharCode(newCharCode);
        } else {
            result += string[i];
        }
    }
    
    return result;
}

module.exports = caesarCipher;
