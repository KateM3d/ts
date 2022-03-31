"use strict";
//functions
function sum(n1, n2) {
    return n1 + n2;
}
function printResultAgain(num) {
    console.log("result: " + num);
}
printResultAgain(sum(5, 12));
let somefunction;
//function type
let combinedValues;
combinedValues = sum;
console.log(combinedValues(8, 8));
// callbacks with function type
function addAndHandle(n1, n2, cd) {
    const result = n1 + n2;
    cd(result);
}
addAndHandle(2, 3, (result) => {
    console.log(result);
});
