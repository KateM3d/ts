"use strict";
//union type
function combine(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultType === "as number") {
    //     return +result;
    //   } else {
    //     result.toString();
    //   }
    return result;
}
const combinedAges = combine(30, 26, "as number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as number");
console.log(combinedStringAges);
const combineNames = combine("Max", "Anna", "as text");
console.log(combineNames);
