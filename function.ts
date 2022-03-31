//functions
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function printResultAgain(num: number): void {
  console.log("result: " + num);
}

printResultAgain(sum(5, 12));

let somefunction: undefined;

//function type
let combinedValues: (a: number, b: number) => number;

combinedValues = sum;

console.log(combinedValues(8, 8));

// callbacks with function type

function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  cd(result);
}

addAndHandle(2, 3, (result) => {
  console.log(result);
});
