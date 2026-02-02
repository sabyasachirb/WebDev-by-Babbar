let str = "sabya";

let if_palindrome = (str) => {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if(reversed === str) {
        return true;
    }
    return false;
}
if(if_palindrome(str)) {
    console.log(`${str} is a palindrome.`);
}
else {
    console.log(`${str} is not a palindrome.`);
}