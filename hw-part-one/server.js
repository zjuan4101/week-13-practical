const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res) => {
    const { name } = req.params
    const greeting = generateGreeting(name)
    res.send(greeting)
})

app.get('/greeting', (req, res) => {
    const greeting = 'Hello, stranger'
    res.send(greeting)
})

function generateGreeting(name) {
    const greetings = [
        `Hello, ${name}!`,
        `What's up, ${name}?`,
        `${name}! It's so great to see you!`,
        `Wow! Hello there, ${name}!`
    ]
    // Randomly choose a greeting from the array
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return randomGreeting;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})