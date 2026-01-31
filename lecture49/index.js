let obj = {
    age : 12,
    wt : 68, 
    ht:180
}

console.log(obj)

// obj.color = "Brown";
// console.log(obj)
// //nature of object is dynamic we can add or delete properties anytime

// delete obj.ht;
// console.log(obj)

// let second_obj = obj;
// second_obj.age = 15;
// console.log(second_obj)
// console.log(obj)
// //shallow copy
// //both points to the same memory location
// //this is called reference type NOT OBJECT CLONING

// let third_obj = {...obj};
// //deep copy
// //new memory location is created
// console.log(third_obj)

// third_obj.age = 25;
// console.log(third_obj)
// console.log(obj)
// //modification in third_obj will not affect obj
// let new_obj = {
//     address: "Medda",
//     hair: "1kuti"
// }

// let fourth_obj = Object.assign({}, obj, new_obj);
// fourth_obj.wt = 75;
// console.log(fourth_obj)
// console.log(obj)
// //modification in fourth_obj will not affect obj

// let fifth_obj = {};
// for (let key in obj){
//     let new_key = key;
//     let new_value = obj[key];
//     fifth_obj[new_key] = new_value;
// }
// console.log(fifth_obj)




//GARBAGE COLLECTION IN JS
// garbage collection means automatically removing the unreferenced memory from the heap
//always runs in the background
//whenever an object is created in js memory is allocated in the heap
//when there is no reference to that object then that memory is automatically removed by the garbage collector
