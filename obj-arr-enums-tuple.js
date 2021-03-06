"use strict";
//object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "John",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "John",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.AUTHOR,
};
// person.role.push("admin");
// person.role[0] = 10;
let favoriteActivities;
// let favoriteActivities: any[]; losing the ts benefits, ut allows us to use all types of data inside the array.
favoriteActivities = ["sports"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("is read only");
}
