//object
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "John",
    age: 30,
    hobbies: ["sports", "cooking"]
};
var favoriteActivities;
// let favoriteActivities: any[]; losing the ts benefits, ut allows us to use all types of data inside the array.
favoriteActivities = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
