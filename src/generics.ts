// Generics
/*
 - are placeholders for type variables 
 - useful for when we dont know what we are gon pass in
 */

 const echo = <T>(arg: T): T => arg

 // determines wether the argument pass is of type 'object'
 const isObj =  <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
 }
//  console.log(isObj(true))    // false
//  console.log(isObj('John'))  // false
//  console.log(isObj([1, 2, 3]))   // false
//  console.log(isObj({ name: 'John' }))    // true
//  console.log(isObj(null))    // false


 // useful when fn needs logic to see what it returns
 // english: isTrue is a function that takes an `arg` with generic type, it returns an object with `arg` type T, and `is` type boolean
 const isTrue = <T>(arg: T): {arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length){
        return { arg, is: false }
    }
    return { arg, is: !!arg }
 }

// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Dave'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({})) // modified
// console.log(isTrue({ name: 'Dave' }))
// console.log(isTrue([])) // modified
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue(NaN))
// console.log(isTrue(-0))

////////////////////////////////////

interface BoolCheck<T> {
    value: T,
    is: boolean
}

 const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length){
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
 }

 /////////////////
// NARROWING GENERICS WITH EXTEND

 interface HasID {
    id: number
 }

 const processUser = <T extends HasID>(user: T): T => {
    //process the user w/ logic here
    return user
 }

//  console.log(processUser({ id: 1, name: 'Dave'}))
 // console.log(processUser({  name: 'Dave'}))  ERROR! argument `user` needs to conform to HasID shape

//////////////

/**
 * 
 * @param users an array of generic type T (that conforms to HasID interface)
 * @param key generic type K. Essentially a dynamic way of using the keys of first argument as a literal type 
 * @returns an array values, using 2nd param as key of 1st param | T[K]
 */
const getUsersProperty = <T extends HasID, K extends keyof T>( users: T[], key: K): T[K][] => {
    return users.map( user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

// console.log(getUsersProperty(usersArray, "email"))
// console.log(getUsersProperty(usersArray, "username"))
// console.log(getUsersProperty(usersArray, 'phone'))


////////////////////////////////

class StateOject<T> {
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

// implicitly infers StateObject<string>
const store = new StateOject('John')
console.log(store)
console.log(store.state)
store.state =  'Joe'
console.log(store.state)

const myState = new StateOject<(string | number | boolean)[]>([])

myState.state = [true, 'Joe', 29, 23]
console.log(myState.state)