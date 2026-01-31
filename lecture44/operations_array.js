
// const fruits = ['apple', 'banana', 'orange'];

// fruits.push('kiwi');
// fruits.push('grapes');

// console.log(fruits); 
// // Output: [ 'apple', 'banana', 'orange', 'kiwi', 'grapes' ]

// const fruits = ['apple', 'banana', 'orange'];
//array.shift is used to remove the leftmost element
// fruits.unshift('kiwi');
// fruits.unshift('grapes');

// console.log(fruits); 
// // Output: [ 'grapes', 'kiwi', 'apple', 'banana', 'orange' ]


// The splice method adds or removes elements from an array at a specified index.


// const fruits = ['apple', 'orange'];

// // Inserting 'banana' at index 1
// fruits.splice(1, 0, 'banana');
// console.log(fruits); // Output: ['apple', 'banana', 'orange']

// fruits.splice(1,0, 'nanana', 'njjj')
// console.log(fruits)

// let nf = fruits.slice(2,4)
// console.log(nf)



// const numbers = [-1, 0, -20, 45, 3, 74, -5, 6];

// // Filtering positive numbers
// const positiveNumbers = numbers.filter(function(number) {
//   return number > 0;
// });

// console.log(positiveNumbers); // Output: [ 45, 3, 74, 6 ]


// const negative_number = numbers.filter(function(number){
//     return number<0;
// })
// console.log(negative_number)




// const products = [
//     {
//         id: 1,
//         name: "Product A",
//         price: 10 
//     },
//     {
//         id: 2,
//         name: "Product B",
//         price: 20 
//     },
//     {
//         id: 3,
//         name: "Product C",
//         price: 30
//     },
// ];

// const expensiveProducts = products.filter((product) => product.price > 15);

// console.log(expensiveProducts);

// /* Output : 
// [
//   { id: 2, name: 'Product B', price: 20 },
//   { id: 3, name: 'Product C', price: 30 }
// ]
// */


// let arr = [10,20,30,40]

// let sum = arr.reduce((acc,curr)=> {
//     return acc+curr
// },0)
// console.log(sum)


// let arr = [9, 1, 76, 69, 34, 8, 6];
// arr.sort((a,b)=> a-b); //ascending order
// console.log(arr);
// arr.sort((a,b)=> b-a); //ascending order
// console.log(arr);

// let nums = [5, 12, 8, 130, 44];

// let result = nums.find(n => n > 10);
// console.log(result);

// let emails = ["a@gmail.com", "b@gmail.com", "c@gmail.com"];

// let found = emails.find(e => e === "b@gmail.com");

// if (found) {
//   console.log("Email exists");
