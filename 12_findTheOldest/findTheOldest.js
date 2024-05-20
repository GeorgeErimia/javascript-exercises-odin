function getAge(birthYear, deathYear) {
    if(!deathYear) {
        deathYear = (new Date()).getFullYear();
    }
    return deathYear - birthYear;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
