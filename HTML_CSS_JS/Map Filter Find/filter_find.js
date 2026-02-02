let arr = [1, 4, 7, 9, 12, 15, 18, 21, 24, 27, 30];

// function filterEvenNumbers(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(result = filterEvenNumbers(arr));


let evenArr = arr.filter((num) =>  num % 2 === 0);

console.log(evenArr);


let findNum = arr.find((num) => num > 20);

console.log(findNum);