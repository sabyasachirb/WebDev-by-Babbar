let newelement = document.createElement('p');
newelement.textContent = "This is a new paragraph added using insertAdjacentElement";
let existingelement = document.querySelector('.fdiv');

existingelement.insertAdjacentElement('afterbegin', newelement);
