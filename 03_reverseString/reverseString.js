const reverseString = function(givenString) {
    let reverseLetters = '';
    let reverseLetterLength = givenString.length - 1;
    for(i = 0; i < givenString.length; i++) {
        reverseLetters += givenString[reverseLetterLength];
        reverseLetterLength--;
    }
    return reverseLetters;
};

// Do not edit below this line
module.exports = reverseString;
