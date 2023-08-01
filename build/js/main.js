"use strict";
/**********************
    UTILITY TYPES
 **********************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
// Partial utility type enables us to pass in just a 'portion' or one property of the Assignment interface
// in this case the `grade` property
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly
//* Required -> turns every prop regardless if it uses `?` required
const recordAssignment = (assign) => {
    // send to database logic, etc
    return assign;
};
// Over here, we had to wrap assignGraded in an object and give it the verified prop because
// our param in recordAssignment() has the Required Util Type
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//* Readonly -> disables mutation if assigned
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 12    ->   // Cannot assign to 'grade' because it is a read-only property.ts(2540)
/**
 * Record
 *
 * - used for `mapping` one type as a key to another type value
 */
// over here we use it to create a `string: string` mapping
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
//this example, showcases how you can use types you create and use them with Record
// `finalGrade` now expects a key of type Students and a value of type LetterGrades
// ( both of which are defined above)
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: 'k123',
    grade: 85,
};
const preview = {
    studentId: 'k123',
    title: 'Final Project'
};
// -> type NamesONly = "Dave" | "John"
////////////////////////////////
// ReturnType
// type newAssign =  {
//     title: string, 
//     points: number
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
