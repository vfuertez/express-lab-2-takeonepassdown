const express = require('express')
const app = express();
const PORT = 3027;

app.get('/0', (request, response) => {
        response.send(`<h1>0 Bottles of beer on the wall</h1>
        <a href="http://localhost:3027">End</a>`)
    }
);

app.get('/', (request, response) => {
    response.send(`<h2>99 Bottles of beer on the wall</h2>
    <a href="http://localhost:3027/98">take one down, pass it around</a>`)
});



app.get('/:number_of_bottles', (request, response) => {
    const botNum = parseInt(request.params.number_of_bottles)
    console.log(botNum)
    response.send(`<h1>${botNum} Bottles of beer on the wall</h1>
    <a href="http://localhost:3027/${botNum - 1}">take one down, pass it around</a>`)
});


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});