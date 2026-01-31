function changetext(){
    let element = document.querySelector('.fdiv');
    element.innerText = "Hello World!";
}
let element = document.querySelector('.fdiv');
element.addEventListener('click', changetext);