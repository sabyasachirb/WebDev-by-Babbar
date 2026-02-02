let input = prompt("Enter numbers separated by commas:");
let arr = input.split(',').map(Number);


let result = arr.filter(num => num % 2 === 0);
console.log(result);