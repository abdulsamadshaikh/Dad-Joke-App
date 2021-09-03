/*  
Project Name: Dad Jokes Application Using Fetch API
Description: This is a Dad Jokes Application Using Fetch API, You will get a new joke on each refresh/click. I have written two Different methods to call API requests, You can use whichever you like. I would love to see your feedback and suggestions. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// Fetch Data Using Async/Await Method
async function generateJoke() {
    const config = {
        headers: {
            Accept : 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
    console.log(data)
}
generateJoke()

jokeBtn.addEventListener('click', generateJoke)

// Fetch Data Using .then() Method
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept : 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//         console.log(data)
//     })
// }
// generateJoke()