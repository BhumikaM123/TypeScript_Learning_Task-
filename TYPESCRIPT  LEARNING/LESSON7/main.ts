class Coder{
    SecondLang! : string

    constructor(
            public readonly name: string,
            public music: string,
            public age:number,
            protected lang:string
    ){
        this.name=name
        this.music=music
        this.age=age
        this.lang=lang
    }


public getAge()
{
    return `Hello,Im ${this.age}`
}

}
const Dave=new Coder('Veronica','Rock',66,'TypeScript')
console.log(Dave.getAge())
// console.log(Dave.lang)
// console.log(Dave.age)

class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number,
        lang:string
    ){
        super(name,music,age,lang)
        this.computer=computer
    }
    public getLang(): string{
        return `I write ${this.lang}`
    }
}

const Sara=new WebDev('Mac','Veronica','Rock',34,'English')
console.log(Sara.getLang())

interface Musician{
    name:string,
    instrument:string,
    play(action:string):string

}

class Guitarist implements Musician{
    name:string
    instrument:string

    constructor(name:string, instrument:string){
        this.name=name,
        this.instrument=instrument
    }
    play(action:string){
        return `${this.name},${action} the ${this.instrument}`
    }
}
const Page=new Guitarist('Jimmmyyyy','Guitar')
console.log(Page.play('strums'))

