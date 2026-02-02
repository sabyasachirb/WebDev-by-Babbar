let arr = [1, 4,7, 9, 12, 15, 18, 21, 24, 27, 30];
let result = (arr) => {
    let MaxArr = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > MaxArr) {
            MaxArr = arr[i];
        }
    }
    return MaxArr;
}

console.log(result(arr));