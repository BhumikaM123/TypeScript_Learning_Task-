//BASIC TYPES

let myName: string = 'Dave'
let Age: number
let loading: boolean
let album: any

myName = 'howl'
Age = 44
loading=false
album=88

const sum = (a: number,b: string) => {
    return a+b;//concat if '-' then it will be Arithmetic error
}

//Assigning one or more basic types
let postid: number|string
let isActive: boolean|number|string

//Assigning Regex Basic type
let re:RegExp = /\w+/g
