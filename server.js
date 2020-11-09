const express = require('express');
const app = express();
const fs = require('fs');

const port = 5000;


app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
            throw (err);
        }
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`\n Note Server is running on ${port}. \n`);
});