const reverseString = function(string) {
    let result = '';
    let length = string.length
    while(length > 0) {
        result = result + string.charAt(length-1)
        length--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
