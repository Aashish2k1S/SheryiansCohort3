// "testdev": "nodemon --exec tsx index.ts", //to execute the code through nodemon
// "testdev2": "node --watch index.ts", //to execute the code
// "testdev3": "npx tsc -w",  // to check types


// "dev": "nodemon -e ts --exec \"npx tsc --noEmit && tsx index.ts\"" // this will work as both (like compile/check and execute) but with nodemon


//this is INFERENCE because we are not explicitly defining the datatype to a variable
// let a = 10;
// a = 'aashish';

//this is ANNOTATION because we are here first explicitly defines the datatype of the variable
// let b: string = 'aashish';

// console.log(a);
// console.log(b);


//primitive datatypes for ANNOTATION
// let c: string = 'aashishi';
// let c: number = 9999;
// let c: boolean = false//true;
// let c: undefined = undefined;
// let c: bigint = 999999999n;
// let c: symbol = Symbol(9999);
// let d: symbol = Symbol(9999);
// console.log(c===d);



//non-primitive datatypes for ANNOTATION
//ARRAY
// let arr: number[] = [1,2,4,5,6,7,8,9, true, undefined, 'aashsh'];
// let arr: number[] = [1,2,4,5,6,7,8,9];
// console.log(arr);


//TUPLEs
// let tup: [string, number, boolean] = ['aashish', 9999, false, null];
// let tup: [string, number, boolean] = ['aashish', 9999, false];
// console.log(tup);
// let arr: [{ name: string }, { name: string }, { name: string }] =
// [{ name: 'aashish' }, { name: 'ankit' }, { name: 'subham' }];
// console.log(arr);


//ENUMS - OPTIONS
// enum Role { admin,  superAdmin,  user };
// let role: Role = Role.user;


//UNION TYPED ANNOTATIONS
// let e: string | number | boolean = 'aashish';
// e = false;
// e = 9709;
// e = undefined; x


//LITERAL TYPE
// type Status = 'pending' | 'success' | 'error';
// let status: Status = "success"; 
