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