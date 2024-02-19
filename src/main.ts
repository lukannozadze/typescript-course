//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = stringOrNumber[];
interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type userId = stringOrNumber;

// interface postId = stringOrNumber; //we cant do the same with interface

//Literal types
let myName: "Dave" | "John" | "Amy";
// myName = 'Rachel' //myName must be Dave or John or Amy

//functions

//return type
const add = (a: number, b: number) => {
  return a + b;
};

//void type
const logMsg = (message: stringOrNumber) => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

interface mathFunction {
  (a: number, b: number): number;
}

let subtract: mathFunction = (a, b) => {
  return a - b;
};

logMsg(subtract(2, 1));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

//default parameter value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined,3));

//rest parameter
const total = (...args:number[])=>{
  return args.reduce((prev,cur)=>prev+cur)
}

logMsg(total(1,2,3,4,5,6,7,8,9,10));