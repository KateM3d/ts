//object
var person = {
    // const person = {
    name: "John",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
person.role.push("admin");
person.role[0] = 10;
var favoriteActivities;
// let favoriteActivities: any[]; losing the ts benefits, ut allows us to use all types of data inside the array.
favoriteActivities = ["sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
