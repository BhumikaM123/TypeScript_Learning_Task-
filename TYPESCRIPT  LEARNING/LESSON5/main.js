"use strict";
//Literal types
let myName;
let userName;
userName = 'Veronica';
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(3, 3));
logMsg(addAll(3, 4, 7));
logMsg(sumAll(2, 8));
