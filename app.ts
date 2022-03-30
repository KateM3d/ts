//object

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // const person = {
  name: "John",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[0] = 10;

let favoriteActivities: string[];
// let favoriteActivities: any[]; losing the ts benefits, ut allows us to use all types of data inside the array.

favoriteActivities = ["sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
