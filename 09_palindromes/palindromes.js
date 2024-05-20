const palindromes = function (string) {

    // to lower case
    string = string.toLowerCase();

    // Remove punctuation from text
    var punctuation = /[\.,?!]/g;
    string = string.replace(punctuation, "");

    // Remove spaces from text
    string = string.replace(/\s/g, '')

    for(let i = 0; i < string.length / 2; i++) {
        if(string.charAt(i) !== string.charAt(string.length - i - 1))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
