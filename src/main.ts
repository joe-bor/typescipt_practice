// Type Aliases
// represent typescript types using a diff name
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist =  {
    name?: string,
    active: boolean,
    album: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Joe'
let userName: "Joe" | 'Ethan' | 'Mimi'
userName =  'Ethan'


// functions
// types of return goes after params
const add = (a: number, b: number): number => {
    return a + b
}

const logMessage = (message: any): void => {
    console.log(message)
}

function subtract (c:number, d: number): number {
    return c - d
}

// type mathFunction = (a: number, b: number) => number
interface mathFunction {
    (a: number, b: number): number
} 

const multiply: mathFunction = function (c, d) {
    return c * d
}

// optional parameters
// optional params must be the last in the list
const addAll = (a: number, b: number, c?: number): number => {
    // type guard ->  to narrow down
    if (typeof c !== 'undefined') return a + b + c
    return a + b
}

const sumAll = (a: number, b: number, c: number = 2): number => {
    // type guard ->  to narrow down
    return a + b + c
} 

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce( (prev, curr) => prev + curr)
}
console.log(total(10,2,3,4))

// never type
// for functions that throws errors
// for functions that has an infinite loop
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ?
    true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    // return createError('This should never happen!')
    throw new Error()
}