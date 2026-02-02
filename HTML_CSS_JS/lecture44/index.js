// let obj = {
//     name_s: "Sabyasachi Roy Barman",
//     age: 25
    

// }

// ///Shallow copy
// const user = {
//   name: "Sabyasachi",
//   address: {
//     city: "Dhaka",
//     country: "Bangladesh"
//   }
// };

// const shallowCopy = { ...user };

// shallowCopy.name = "Roy";
// shallowCopy.address.city = "Chittagong";

// console.log(user.name);          // "Sabyasachi" ✅ (independent)
// console.log(user.address.city);  // "Chittagong" ❌ (shared reference)

// ///deep copy

// const deepCopy = JSON.parse(JSON.stringify(user));

// deepCopy.address.city = "Sylhet";

// console.log(user.address.city); // "Dhaka" ✅
///modern js to deep copy
// const deepCopy = structuredClone(user);


//example of for in loops

// for (let key in user) {
//   console.log(key, user[key]);
// }

let arr= [10, 20, 30, 40];
arr.forEach((value, index) => 
{
    console.log({"Number": value, "Index": index})
})