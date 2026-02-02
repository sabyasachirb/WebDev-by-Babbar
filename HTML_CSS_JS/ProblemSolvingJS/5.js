let input = 5;

let if_p = (input) => {
    for(let i = 2; i <= Math.sqrt(input); i++) {
        if(input % i === 0) {
            return false;
        }
    }
    return input > 1;
}

if(if_p(input)) {
    console.log(`${input} is a prime number.`);
} else {
    console.log(`${input} is not a prime number.`);
}