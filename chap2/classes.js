// class Person {
//   constructor() {}
//   msg: string;
//   speak() {
//     console.log(this.msg);
//   }
// }
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
// const tom = new Person();
// tom.msg = "hello";
// tom.speak();
var tom = new Person("hello");
tom.speak();
