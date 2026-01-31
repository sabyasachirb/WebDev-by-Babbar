// function printMessage() {
//     console.log("Timeout 2s");
// }

// console.log("HEY")

// setTimeout(() => {
//     console.log("TIMEOUT 5s")
// }, 5000);

// console.log("HELLO")

// setTimeout(printMessage, 2000);
// //here printMessage is passed as a callback function or an argument to setTimeout

// console.log("BYE")

//setTimeout is used to schedule a function to be called after a specified delay (in milliseconds).
// In this example, "Timeout 2s" will be printed after 2 seconds, and "TIMEOUT 5s" will be printed after 5 seconds.


// function greet(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello, " + name + "!");
//         }
//         , 2000);
//     });
// }

// let greetPromise = greet("Alice");

// greetPromise.then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


// function async(taskName, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Task ${taskName} completed`);
//         }, delay);
//     });
// }
// console.log("Starting tasks...");

// let asyncPromise = async("A", 5000);
    
// // asyncPromise.then((res) => {
// //     console.log(res);
// //     let a =  async("B", 1000);
// //     a.then((res) => {
// //         console.log(res);
// //     });
// // });

// asyncPromise.then((res) => {
//     console.log(res);
//     return async("B", 1000);
// }).then((res) => {
//     console.log(res);
// });


function getweather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                city: city,
                temperature: 25,
                condition: "Sunny"
            };
            resolve(weatherData);
        }, 3000);
    });
}
async function displayWeather(city) {
    try {
        const weather = await getweather(city);
        console.log(`Weather in ${weather.city}: ${weather.temperature}°C, ${weather.condition}`);
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}
displayWeather("New York");
