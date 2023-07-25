"use strict";
/**
 * Type Assertion || Type Casting
 *
 *  are interchangeable?
 */
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
console.log(a, b, c);
// angle brackets to do the same thing as above
let d = 'world';
let e = 'world';
/**
 *
 * When do we use this ??
 *
 */
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// BE CAREFUL w/ assertions... this example is wrong !
// function returns a string and not a number
// but we were able to override TS 
let nextVal = addOrConcat(2, 2, 'concat');
// Assertions - The DOM
const img = document.querySelector('img'); // non-null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
//
img.src;
myImg.src;
