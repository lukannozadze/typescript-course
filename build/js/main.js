"use strict";
let stringArr = ["one", "hey", "John"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "Luka";
stringArr.push("bye");
guitars[0] = 1042;
guitars = stringArr;
let test = [];
let bands = [];
bands.push("Arctic Monkeys");
//tuple
let myTuple = ["John", 42, true];
//union typed array
let mixed = ["John", 1, false];
mixed = myTuple;
///objects
let myObj;
myObj = [];
console.log(typeof myObj); //still object
const exampleObject = {
    prop1: "Luka",
    prop2: true,
};
exampleObject.prop2 = false;
;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: [1442, "IV", "OU812"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(JP));
