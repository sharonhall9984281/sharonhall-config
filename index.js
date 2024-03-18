// moonbeam-utils.js

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Function to generate a random hexadecimal color code
function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

module.exports = {
    capitalizeWords,
    isEven,
    randomHexColor
};
