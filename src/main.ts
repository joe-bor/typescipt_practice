/**
 * Type Assertion || Type Casting
 * 
 *  are interchangeable?
 */

// aliases
type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

console.log(a,b ,c)

// angle brackets to do the same thing as above
let d = <One>'world'
let e = <string | number>'world'

/**
 * 
 * When do we use this ??
 * 
 */

const addOrConcat =  (a: number, b: number, c: 'add' | 'concat' ): number | string => {
    if (c === 'add') return a + b
    return '' + a +  b 
}

let myVal: string = addOrConcat(2,2,'concat') as string

// BE CAREFUL w/ assertions... this example is wrong !
// function returns a string and not a number
// but we were able to override TS 
let nextVal: number = addOrConcat(2,2,'concat') as number

// Assertions - The DOM
const img = document.querySelector('img')! // non-null assertion
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img') 

//
img.src
myImg.src