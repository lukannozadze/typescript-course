type One = string;
type Two = string | number;
type Three = 'hello'

//convert to more or less specific
let a:One = 'hello';
let b = a as Two;
let c = a as Three

let d = <One>'something';
let e = <string | number>'world'

const addOrConcat = (a:number,b:number,c:'add'|'concat'):number|string =>{
  if(c==='add'){
    return a+b;
  }
  return '' + a + b;
}

console.log(addOrConcat(2,5,'concat'));

let result:string = addOrConcat(2,2,'concat') as string;

//typescript sees no problem, because it trusts you that number is returned
let result2:number = addOrConcat(2,2,'concat') as number;

console.log(result2); //string is returned because of type 'concat'

//double casting - is not recommended
(10 as unknown) as string

//The DOM

const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img')!;

// img.src
// myImg.src
