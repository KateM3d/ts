//object

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "John",
  age: 30,
  hobbies: ["sports", "cooking"],
};

let favoriteActivities: string[];
// let favoriteActivities: any[]; losing the ts benefits, ut allows us to use all types of data inside the array.

favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
