"use strict";
//convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'something';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
console.log(addOrConcat(2, 5, 'concat'));
let result = addOrConcat(2, 2, 'concat');
//typescript sees no problem, because it trusts you that number is returned
let result2 = addOrConcat(2, 2, 'concat');
console.log(result2); //string is returned because of type 'concat'
//double casting - is not recommended
10;
