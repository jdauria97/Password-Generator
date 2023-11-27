// Assignment Code
var generateBtn = document.querySelector("#generate");



var criteria = {
    uppercaseABC: "ABCDEFGHIJKLMNOPQRSTUVWXZ",
    lowercaseABC: "abcdefghijklmnopqrstuvwxyz",
    specialSymbols: "!@#$%^&*()?.<>/|=+:;,[-_]",
    numeric: "0123456789"
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var getRandomChar = function (fromString) {
    return fromString[Math.floor(Math.random() * fromString.length)];
};

function generatePassword() {
    var chooseLength = window.prompt("Select password length from '8'-'128' characters");
    var chooseUpper = window.confirm("Do you want uppercase letters?");
    var chooseLower = window.confirm("Do you want lower case letters?");
    var chooseSymb = window.confirm("Do you want special characters?");
    var chooseNumb = window.confirm("Do you want numbers?");
    var info = "";
    var characters = [];

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

