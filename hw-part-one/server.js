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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const { total, tipPercentage } = req.params
    const tipAmount = calculateTip(parseFloat(total), parseFloat(tipPercentage))
    res.send(`Tip Amount: ${tipAmount}`)
})


app.get('/magic/:question', (req, res) => {
    const { question } = req.params
    const magic8BallResponse = generateMagic8BallResponse()
    res.send(`<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${magic8BallResponse}</h1>`)
})

function generateMagic8BallResponse() {
    const responses = [
        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "My sources say yes",
        "Outlook not so good",
        "Very doubtful"
    ]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    return randomResponse
}

function calculateTip(total, tipPercentage) {
    const tip = (total * tipPercentage) / 100
    const roundedTip = Math.round(tip * 100) / 100
    return roundedTip
}

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