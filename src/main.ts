import './style.css'
// Type Aliases

type StringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

type Gitarist = {
  name?: string;
  age: number;
  band?: string;
  albums: StringOrNumberArray;
};

type userId = StringOrNumber;

// Literal Types

let myName: "Max";

let userName: "Max" | "Anna";
userName = "Anna";

// Function Types
const add = (a: number, b: number): number => {
  return a + b;
};
const logMessage = (message: any): void => {
  console.log(message);
};
logMessage("Hello World");
logMessage(add(1, 2));

let substruct = (a: number, b: number): number => {
  return a - b;
};

logMessage(substruct(2, 1));

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let multiply: AddFn = (a: number, b: number) => {
  return a * b;
};

logMessage(multiply(2, 2));

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
};
// Default Parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addAll(1, 2));
logMessage(sumAll(1, 2));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(10, 2, 3, 4, 5));

// Function Overloads
const createError = (message: string, code: number): never => {
  throw new Error(`${message}. Code: ${code}`);
};
// createError("An error occured", 500);

const infinite = () => {
  let i: number = 0;
  while (true) {
    i++;
    if (i > 10) break;
  }
};
// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "This is a string";
  if (typeof value === "number") return "This is a number";
  return createError("Value is not a string or number", 500);
};


















