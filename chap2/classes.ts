// class Person {
//   constructor() {}
//   msg: string;
//   speak() {
//     console.log(this.msg);
//   }
// }

class Person {
  constructor(private readonly msg: string) {}
  speak() {
    console.log(this.msg);
  }
}

// const tom = new Person();
// tom.msg = "hello";
// tom.speak();


const tom = new Person("hello");
tom.speak();