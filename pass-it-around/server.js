const express = require('express')
const app = express()
const port = 3000

// Home Page Route
app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="/98">Take one down, pass it around</a>
    `)
})

// Bottles Route
app.get('/:number_of_bottles', (req, res) => {
    const { number_of_bottles } = req.params

    // Convert the parameter to a number
    const numberOfBottles = parseInt(number_of_bottles)

    // Check if there are bottles left
    if (numberOfBottles > 0) {
        const nextNumber = numberOfBottles - 1
        res.send(`
            <h1>${number_of_bottles} Bottles of beer on the wall</h1>
            <a href="/${nextNumber}">Take one down, pass it around</a>
            <br>
            <a href="/">Start Over</a>
        `)
    } else {
        // If there are no bottles left, show a different message
        res.send(`
            <h1>No more bottles of beer on the wall</h1>
            <a href="/">Start Over</a>
        `)
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
