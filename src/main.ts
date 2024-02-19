let stringArr = ["one", "hey", "John"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "Luka";
stringArr.push("bye");

guitars[0] = 1042;

guitars = stringArr;

let test = [];
let bands: string[] = [];
bands.push("Arctic Monkeys");

//tuple
let myTuple: [string, number, boolean] = ["John", 42, true];

//union typed array
let mixed = ["John", 1, false];

mixed = myTuple;

///objects
let myObj: object;
myObj = [];
console.log(typeof myObj); //still object

const exampleObject = {
  prop1: "Luka",
  prop2: true,
};

exampleObject.prop2 = false;

interface Guitarist{
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};
let JP: Guitarist = {
  name: "Jimmy",
  active:true,
  albums: [1442, "IV", "OU812"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}`;
};
console.log(greetGuitarist(JP));
