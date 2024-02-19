"use strict";
// interface postId = stringOrNumber; //we cant do the same with interface
//Literal types
let myName;
// myName = 'Rachel' //myName must be Dave or John or Amy
//functions
//return type
const add = (a, b) => {
    return a + b;
};
//void type
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = (a, b) => {
    return a - b;
};
logMsg(subtract(2, 1));
