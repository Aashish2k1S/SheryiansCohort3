//OBJECT ANNOTATION 

// let obj: {
//     name: string; age: number; company: string;  
//     address: { street: string;  city: string;  state: string; }; 
// } = {
//     name: 'aashish', age: 25, company: 'ITM', 
//     address: { street: 'GT Road', city: 'Kolkata', state: 'WB' } 
// }; 


//custom types for response 
type UserObj = {
    name: string; age: number; company: string;
    address: { street: string; city: string; state: string; };
};

let obj: UserObj = {
    name: 'aashish', age: 25, company: 'ITM',
    address: { street: 'GT Road', city: 'Kolkata', state: 'WB' }
};


//FUNCTIONAL ANNOTATION 
// let sum = (a: number, b: number): number => { return a + b; }; 
// let res: number = sum(999, 7867); 
// console.log(res);

// let greeting = (name: string): void => { console.log(`good morning, ${name}`); }; 
// greeting('aashish'); 

let test = (a: number, b: (x: number) => number): void => { console.log( b(a) ); }
test(10, (x)=> { return x; }); 
