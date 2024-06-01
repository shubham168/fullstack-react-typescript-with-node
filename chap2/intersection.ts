let obj: { name: string } & { age: number } = {
  name: "tom",
  age: 25,
};
console.log(obj);

let unionObj: null | { name: string } = null;
unionObj = { name: "jon" };

console.log(unionObj);

let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue";

console.log(literal);
// literal = "aa"; // throws error as aa is not in the list of types for literal
