let arr = [1, 4,7, 9, 12, 15, 18, 21, 24, 27, 30];
let result = (arr) => {
    let SumArr = 0;
    for(let i = 0; i < arr.length; i++) {
        SumArr += arr[i];
    }
    return SumArr;
}

console.log(result(arr));