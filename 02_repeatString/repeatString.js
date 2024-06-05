const repeatString = function(stringToPass, numberOfTimesToLoop) {
    let loopString = '';
    if(numberOfTimesToLoop < 0) {
        return 'ERROR'
    }
    else{
        for(i=0; i < numberOfTimesToLoop; i++) {
            loopString += stringToPass ;
        }
    }
    return loopString;
};

// Do not edit below this line
module.exports = repeatString;
