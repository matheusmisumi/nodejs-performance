process.env.UV_THREADPOOL_SIZE = 1;

const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 10000, 512, 'sha512', () => {
        res.send('Hi there');
    });
});

app.get('/fast', (req, res) => {
    res.send('This was fast');
})

app.listen(PORT);