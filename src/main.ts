//Index Signatures

interface TransactionObj{
  [index:string]:number
}

const todaysTransactions:TransactionObj = {
  Pizza:-10,
  Books: -5,
  Job:50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop:string = 'Pizza';

console.log(todaysTransactions[prop]);

////////////////////

interface Student {
  // [key:string]:string | number | number[] | undefined
   name:string,
  GPA:number,
  classes?:number[]
}

const student:Student = {
name:'Doug',
GPA:3.5,
classes:[100,200]
}

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}