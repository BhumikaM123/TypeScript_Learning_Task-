//Type Aliases
type StringOrNumber = string | number

type StringOrNumberArray=(string|number)[]//Array

type Guitarist = {
name?:String,
active:boolean,
albums:StringOrNumberArray
}

type UserId=StringOrNumber

//Literal types
let myName:'Bhu'
let userName: 'Bhu'| 'Amy' | 'Veronica'

userName='Veronica'

//Functions

const add = (a:number, b:number): number => {
return a+b;
}

const logMsg = (message:any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2,3))

//Optional Parameters
const addAll=(a: number, b:number, c?: number):number=>{
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

const sumAll=(a:number,b:number,c: number = 2 ): number =>{
return a + b + c
}

logMsg(addAll(3,3))
logMsg(addAll(3,4,7))
logMsg(sumAll(2,8))



