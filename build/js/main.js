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
//optional parameters
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
//default parameter value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//rest parameter
const total = (...args) => {
    return args.reduce((prev, cur) => prev + cur);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
