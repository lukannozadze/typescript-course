// // // class Base {
// // //   protected x: number = 1;
// // // }
// // // class Derived1 extends Base {
// // //   protected x: number = 5;
// // // }
// // // class Derived2 extends Base {
// // //   f1(other: Derived2) {
// // //     other.x = 10;
// // //   }
// // //   f2(other: Derived1) {
// // //     other.x = 10;
// // //   }
// // // }


// // class A {
// //   private x = 10;
 
// //   public sameAs(other: A) {
// //     // No error
// //     return other.x === this.x;
// //   }
// // }


// // function log(target: any, key: string) {
// //   console.log(`Called ${key} method`);
// //   console.log(target);
// // }

// // class MyClass {
// //   //@log
// //   greet() {
// //       console.log('Hello!');
// //   }
 
// // }

// // //const obj = new MyClass();
// // //obj.greet();

// // ////////////////////////////////


// // function log2(target: any, key: string, descriptor: PropertyDescriptor) {
// //   const originalMethod = descriptor.value;
// //   console.log(descriptor.value);
// //   descriptor.value = function (...args: any[]) {
// //       console.log(`Entering ${key} with arguments:`, args);
// //       const result = originalMethod.apply(this, args);
// //       console.log(`Exiting ${key} with result:`, result);
// //       return result;
// //   };

// //   return descriptor;
// // }

// // class Calculator {
// //   @log2
// //   add(x: number, y: number): number {
// //       return x + y;
// //   }

// //   @log2
// //   subtract(x: number, y: number): number {
// //       return x - y;
// //   }
// // }

// // const calculator = new Calculator();
// // console.log(calculator.add(5, 3)); 
                                  
// // //console.log(calculator.subtract(10, 4));



// /////////////////////////////////////////////////////////////////////////


// function validate(target: any, key: string) {
//   let value = target[key];
   
//   const getter = () => {
//       return value;
//   };

//   const setter = (newValue: any) => {
//       if (typeof newValue === 'string' && newValue.length > 0) {
//           value = newValue;
//       } else {
//           throw new Error(`Invalid value for ${key}`);
//       }
//   };

//   Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true
//   });
// }

// class UserProfile {
//   @validate
//   name: string;

//   @validate
//   email: string;

//   @validate
//   age: number;

//   constructor(name: string, email: string, age: number) {
//       this.name = name;
//       this.email = email;
//       this.age = age;
//   }
// }

// const user = new UserProfile('John Doe', 'john@example.com', 30);

// console.log(user.name); // Output: John Doe
// console.log(user.email); // Output: john@example.com
// console.log(user.age); // Output: 30

// // Throws an error because age must be a number
// // user.age = 'thirty';

// // Throws an error because email cannot be an empty string
// // user.email = '';


function sealed(constructor:Function){
  console.log(constructor.prototype);
  
  Object.seal(constructor);
  Object.seal(constructor.prototype)
}

@sealed
class BugReport {
  title:string

  constructor(title:string){
    this.title = title
  }
}

const bug = new BugReport('titlee');
