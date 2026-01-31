// console.log(saymyname("Sabyasachi"));

// function saymyname(name){
//     return "Hi "+name;
// }

//here the function declarationg shifts to the top of the scope that's why it doesn't create any problem to print the function

// console.log(names)
// var names= "sabyasachi"

// here the keyword only moves not the value


// const object = new human();
// class human{

// }

///function calls stack in js
///function->>first class citizen

//pass a function through function
// function solve(){
//     return function (number){
//         return number*number;
//     }
// }

// let ans = solve();
// let final_ans= ans(5);
// console.log(final_ans)


// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }

// ];
    

// let first = arr[0];
// let ans = first(5,6);
// console.log(ans)


let obj = {
    Name : "Sabyasachi Roy Barman",
    age : 25,
    Address : "Medda",
    greet: ()=>{
        console.log("HELLO WORLD");
    }
}

console.log(obj.age)
obj.greet()