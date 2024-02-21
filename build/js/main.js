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
