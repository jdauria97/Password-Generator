// Assignment Code
var generateBtn = document.querySelector("#generate");


// establishes arrays for each of the character types 
var criteria = {
    uppercaseABC: "ABCDEFGHIJKLMNOPQRSTUVWXZ",
    lowercaseABC: "abcdefghijklmnopqrstuvwxyz",
    specialSymbols: "!@#$%^&*()?.<>/|=+:;,[-_]",
    numeric: "0123456789"
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// selects random characters from the arrays 
var getRandomChar = function (fromString) {
    return fromString[Math.floor(Math.random() * fromString.length)];
};

// overall function for the entire process 
function generatePassword() {
    // window prompts to select password criteria 
    var chooseLength = window.prompt("Select password length from '8'-'128' characters");
    var chooseUpper = window.confirm("Do you want uppercase letters?");
    var chooseLower = window.confirm("Do you want lower case letters?");
    var chooseSymb = window.confirm("Do you want special characters?");
    var chooseNumb = window.confirm("Do you want numbers?");
    // empty array that will form password criteria choices
    var info = "";
    // empty array that will contain the selected characters based upon chosen criteria 
    var characters = [];

    // boolean statements select character criteria choice 
    if (chooseLength >= 8 && chooseLength <= 128) {
        if (chooseUpper) {
            info += criteria.uppercaseABC;
            characters.push(getRandomChar(criteria.uppercaseABC));
        };
        if (chooseLower) {
            info += criteria.lowercaseABC;
            characters.push(getRandomChar(criteria.lowercaseABC));
        };
        if (chooseSymb) {
            info += criteria.specialSymbols;
            characters.push(getRandomChar(criteria.specialSymbols));
        };
        if (chooseNumb) {
            info += criteria.numeric;
            characters.push(getRandomChar(criteria.numeric));
        };
        while (characters.length < chooseLength) {
            characters.push(getRandomChar(info));
        };
        if (!info) {
            window.alert("You must choose at least one criteria option. please try again.");
            generatePassword();
        };
        // limits array of password characters to chosen length and then randomly shuffles 
        for (let i = characters.length - 1; i > 0; i--) {
            var shuffle = Math.floor(Math.random() * (i + 1));
            var temp = characters[i];
            characters[i] = characters[shuffle];
            characters[shuffle] = temp;
        };
        return characters.join("");
    }

    else {
        window.alert("Please enter a length between '8'-'128'.");
        return;
    };


}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

