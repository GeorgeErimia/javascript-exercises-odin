const removeFromArray = function(array, ...elementsToRemove) {
     let newArray = [];
     for(let element of array) {
        if(!elementsToRemove.includes(element)) {
            newArray.push(element);
        }
     }
     return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
