"use strict";
// Generics
/*
 - are placeholders for type variables
 - useful for when we dont know what we are gon pass in
 */
const echo = (arg) => arg;
// determines wether the argument pass is of type 'object'
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
//  console.log(isObj(true))    // false
//  console.log(isObj('John'))  // false
//  console.log(isObj([1, 2, 3]))   // false
//  console.log(isObj({ name: 'John' }))    // true
//  console.log(isObj(null))    // false
// useful when fn needs logic to see what it returns
// english: isTrue is a function that takes an `arg` with generic type, it returns an object with `arg` type T, and `is` type boolean
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user w/ logic here
    return user;
};
//  console.log(processUser({ id: 1, name: 'Dave'}))
// console.log(processUser({  name: 'Dave'}))  ERROR! argument `user` needs to conform to HasID shape
//////////////
/**
 *
 * @param users an array of generic type T (that conforms to HasID interface)
 * @param key generic type K. Essentially a dynamic way of using the keys of first argument as a literal type
 * @returns an array values, using 2nd param as key of 1st param | T[K]
 */
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
// console.log(getUsersProperty(usersArray, "email"))
// console.log(getUsersProperty(usersArray, "username"))
// console.log(getUsersProperty(usersArray, 'phone'))
////////////////////////////////
class StateOject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// implicitly infers StateObject<string>
const store = new StateOject('John');
console.log(store);
console.log(store.state);
store.state = 'Joe';
console.log(store.state);
const myState = new StateOject([]);
myState.state = [true, 'Joe', 29, 23];
console.log(myState.state);
