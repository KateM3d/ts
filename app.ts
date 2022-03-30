//union type

/*
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine("Max", "Anna");
console.log(combineNames);
*/

//Literal types

function combine(
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as number"
  ) {
    result = +input1 + +input2;
  } else {
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
