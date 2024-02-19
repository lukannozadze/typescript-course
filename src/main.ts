//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = stringOrNumber[];
interface Guitarist{
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// interface postId = stringOrNumber; //we cant do the same with interface 


//Literal types
let myName:'Dave' | 'John' | 'Amy';
// myName = 'Rachel' //myName must be Dave or John or Amy