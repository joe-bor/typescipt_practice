"use strict";
// Index Signatures
//  * for dynamic access of object props
//  * or if you don't know the names of the keys  
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
/*
! Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
!  No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
*/
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// no typescript error even though it should return undefined
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // <<-- `as keyof` essentially returns the keys of our interface (Student)
}
/**
 * typeof student === object w/ interface Student
 *  - just long way of saying the same thing as above
 */
Object.keys(student).map(key => {
    console.log(student[key]);
});
/**
 *
 * @param student annotate with interface Student
 * @param key annotate using `keyof` keyword; keyof Student
 */
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
