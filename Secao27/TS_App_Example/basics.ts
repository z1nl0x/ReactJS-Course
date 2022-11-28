// Primitives: number, string, boolean
// More Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 13;
age = 12;

let userName: string;
userName = "John";

let isHuman: boolean;
isHuman = true;

// Complex Types
let hobbies: string[];
hobbies = ["E-Sports", "Coding"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "John",
  age: 27,
};

let people: Person[];

// Type Inference
let course: string | number = "React - The Complete Guide";

course = 1234;

// Functions and Types
function addTest(a: number, b: number): number {
  return a + b;
}

function printVal(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
