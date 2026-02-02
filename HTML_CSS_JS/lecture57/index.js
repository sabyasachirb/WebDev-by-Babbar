const URL = "https://meowfacts.herokuapp.com/?lang=ben-in";
let btn = document.getElementById("getFactButton");
let factDisplay = document.querySelector(".factmsg");


const getfacts = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data.data[0]);
        factDisplay.innerText = data.data[0];
    } catch (error) {
        console.log("Error fetching data:", error);
    }   
};
btn.addEventListener("click", getfacts);

