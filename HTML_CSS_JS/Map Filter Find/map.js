let arr = [1, 4,7, 9, 12, 15, 18, 21, 24, 27, 30];

// function square(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * arr[i]);
//     }
//     return result;
// }

// console.log(square(arr));


let squareArr = arr.map((num) => {
    return num * num;
});

console.log(squareArr);