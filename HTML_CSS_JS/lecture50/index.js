//Error Handling in JavaScript
//types of errors
//compile time error


//syntax error
// console.log("Hello World
//won't run due to syntax error


//runtime error
// console.log(x); //x is not defined
//reference error


//handling
//try...catch...block

// try{
//     console.log("Inside try block");
//     console.log(x); //x is not defined
// }
// catch(error){
//     console.log("Inside catch block");
//     console.log("your error:", error);
// }
// finally{
//     console.log("Inside finally block");
// }


//custom error
// try{
//     console.log(x);
// }
// catch(error){
//     throw new Error("prothome declare koren tarpore use koren");
// }

let errorCode = 404;

if(errorCode === 404){
    throw new Error("Page not found");
}

