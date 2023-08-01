/**********************
    UTILITY TYPES
 **********************/ 
 

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {... assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

// Partial utility type enables us to pass in just a 'portion' or one property of the Assignment interface
// in this case the `grade` property
console.log(updateAssignment(assign1, { grade: 95 }))

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
console.log(assignGraded)


// Required and Readonly

//* Required -> turns every prop regardless if it uses `?` required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database logic, etc
    return assign
}
// Over here, we had to wrap assignGraded in an object and give it the verified prop because
// our param in recordAssignment() has the Required Util Type
recordAssignment({...assignGraded, verified: true })


//* Readonly -> disables mutation if assigned
const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}
// assignVerified.grade = 12    ->   // Cannot assign to 'grade' because it is a read-only property.ts(2540)

/**
 * Record
 * 
 * - used for `mapping` one type as a key to another type value
 */

// over here we use it to create a `string: string` mapping
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

//this example, showcases how you can use types you create and use them with Record
// `finalGrade` now expects a key of type Students and a value of type LetterGrades
// ( both of which are defined above)
const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}

////////////////////////////////////

/*
*    interface Assignment {
*        studentId: string,
*        title: string,
*        grade: number,
*        verified?: boolean
*    }
 */

// Pick <Type, props to take/use>
// - let's us pick and choose props from a Type and ignore the rest
// works with Interface
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'k123',
    grade: 85,
}

// Omit <Type, props to ignore>
// - ignores chosen props of Type as if they weren't there
// works with Interface
type AssignPreview = Omit<Assignment, 'grade' | "verified">

const preview: AssignPreview = {
    studentId: 'k123',
    title: 'Final Project'
}

//////////////////////////////////////

//* type LetterGrades = "A" | "B" | "C" | "D" | "U"
// working with union literal types

// Exclude
type adjustedGrade = Exclude<LetterGrades, 'U'>
//  -> type adjustedGrade = "A" | "B" | "C" | "D"

// Extract
type highGrade = Extract<LetterGrades, 'A' | 'B'>
// -> type highGrade = "A" | "B"

// NonNullable
type AllPossibleGrade = 'Dave' | 'John' | null | undefined
type NamesONly = NonNullable<AllPossibleGrade>
// -> type NamesONly = "Dave" | "John"

////////////////////////////////

// ReturnType

// type newAssign =  {
//     title: string, 
//     points: number
// }

const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

// side note: this can be useful for when you are bringing in fn's someone else wrote

// this example showcases how you can dynamically assign a type to an object returned by your function
// using the return type
// -> by doing so, we don't have to update the type of the returned value, whenever we edit the function
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('Utility Types', 100)
console.log(tsAssign)


//////////////////////

// Parameters
// -> extracts the types of the params defined in a function declaration
// -> returns a tuple of the types, in the same order they were defined

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)



////////////////////////

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))