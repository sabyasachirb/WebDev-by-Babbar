let arr = [1, 30, 4, 1, 7, 9, 12, 15, 27, 4, 18, 21, 24, 9,  27, 30];

let result = (arr) => {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(result(arr));