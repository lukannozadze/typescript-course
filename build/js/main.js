"use strict";
// class Coder{
//     secondLang!:string
//    constructor(public readonly name:string,public music:string,private age:number,protected lang:string = 'Typescript'){
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//    }
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(Steve.id);
///////////////////////////////////////////
class Bands {
    constructor() {
        this.datasState = [];
    }
    get data() {
        return this.datasState;
    }
    set data(value) {
        if (typeof value === 'string') {
            this.datasState.push(value);
            return;
        }
        else
            throw new Error('Wrong value type');
    }
}
const myBands = new Bands();
myBands.data = ('Linkin Park');
console.log(myBands.data);
