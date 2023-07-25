"use strict";
// Literal types
let myName;
let userName;
userName = 'Ethan';
// functions
// types of return goes after params
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
function subtract(c, d) {
    return c - d;
}
const multiply = function (c, d) {
    return c * d;
};
// optional parameters
// optional params must be the last in the list
const addAll = (a, b, c) => {
    // type guard ->  to narrow down
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    // type guard ->  to narrow down
    return a + b + c;
};
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 2, 3, 4));
// never type
// for functions that throws errors
// for functions that has an infinite loop
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ?
        true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    // return createError('This should never happen!')
    throw new Error();
};
