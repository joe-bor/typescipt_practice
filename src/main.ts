class Coder {
    secondLang!: string // ! - assertion ( I know what im doing command )

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
        ) {
        this.name = name
        this.music =  music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello I'm ${this.age}`
    }
}

// visibility / data / modifiers || members
    // readonly - cannot be changed
    // private - can only be accessed inside Class
    // protected - can be accessed by derived (extended) class

    const Dave = new Coder('Dave', 'Rock', 42)
    console.log(Dave.getAge())
    // console.log(Dave.age) //
    // console.log(Dave.lang)


    /**~~~~~~~~~~~~~~~~~~```` */

    class WebDev extends Coder {
        constructor(
            public computer: string,
            name: string,
            music: string,
            age: number
        ) {
            super(name, music, age)
            this.computer = computer
        }

        public getLang() {
            return `I write ${this.lang}`
        }
    }

    const Joe = new WebDev('Mac', 'Joe', 'Pop', 29)

    console.log(Joe)
    console.log(Joe.getLang())
    
    
    /* 
    ! visibility modifiers are also passed down thru extend 
    
    console.log(Joe.age)
    console.log(Joe.lang)

     - these have typescript errors because age is private to Coder Class, and lang is protected also defined in Coder Class

     - even though WebDev is an extension of Coder, our instance, Joe is the one trying to access them and not the class itself

    */


     interface Musician {
        name: string,
        instrument: string,
        play(action: string): string
     }

     class Guitarist implements Musician {
        // name: string
        // instrument: string

        constructor(public name: string, public instrument: string) {
             this.name = name
             this.instrument = instrument
        }

        play(action: string) {
            return `${this.name} ${action} the ${this.instrument}`
        }
     }

     const Page = new Guitarist('Jimmy', 'guitar')
     console.log(Page.play('strums'))
////////////////////////////////////////////////////
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number 

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}


const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count)

//////////////////////////////////

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every( el => typeof el === 'string')){
            this.dataState = value
            return
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']