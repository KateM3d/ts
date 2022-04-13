"use strict";
//the unknown type
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occured", 500);
//comment