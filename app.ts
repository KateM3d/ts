//the unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

//never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("an error occured", 500);
