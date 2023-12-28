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