// Index Signatures
//  * for dynamic access of object props
//  * or if you don't know the names of the keys  

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

// declares all keys are strings and values will be numbers
// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index:string]: number
    Pizza: number,
    Books: number,
    Job: number
}


const todaysTransactions: TransactionObj  = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'

console.log(todaysTransactions[prop])
/*
! Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
!  No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
*/

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))

// no typescript error even though it should return undefined
console.log(todaysTransactions['Dave'])

//////////////////////////////////
interface Student {
    // [key: string]: string | number | number[] | undefined // <<--- add index signature here; because classes is optional
    // we had to define all the return types, including undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}



for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // <<-- `as keyof` essentially returns the keys of our interface (Student)
}

/**
 * typeof student === object w/ interface Student
 *  - just long way of saying the same thing as above
 */
Object.keys(student).map( key => {
    console.log(student[key as keyof typeof student])
})


/**
 * 
 * @param student annotate with interface Student
 * @param key annotate using `keyof` keyword; keyof Student
 */
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'GPA')

////////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'
/**
 * this is a Record Utility type < x , y >
 * where x is the types of keys ( in this case we defined `Streams` to have literal types )
 * and y is the types of values
 * 
 * - so instead of using index signature, and setting our keys to type string, we can set them to a literal type that we create
 * - we just have to use assertion when we dynamically access an object's property, as shown in example below
 */
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
}

for (const revenue in monthlyIncomes ) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}