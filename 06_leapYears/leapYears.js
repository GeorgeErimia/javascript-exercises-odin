const leapYears = function(year) {
    // Check if the year is divisible by 4
    if(year % 4 === 0) {
        // If the year is divisible by 4 we check if it's divisible by 100
        if(year % 100 === 0) {
            // If the year is divisible by 4, 100 and 400 it's a LEAP YEAR
            if(year % 400 === 0) {
                return true
            }
            // Otherwise it's not a leap year
            else return false;
        }
        // If the year is divisible by 4 but not by 100, it's a LEAP YEAR 
        else {
            return true
        }
    }
    // If the year is not divisible by 4, it's not a leap year
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
