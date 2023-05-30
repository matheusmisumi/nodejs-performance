const cluster = require('cluster');

// Is the file being execute in master mode?

if (cluster.isMaster) {
    // Cause index.js to be executed *again* but 
    // in child mode
    cluster.fork();
} else {
    // Child, acting like a server, and nothing else.
    const express = require('express');
    const app = express();
    const PORT = 3000;

    function executeTask(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) { }
    }

    app.get('/', (req, res) => {
        executeTask(5000)
        res.send('Hi there');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    })

    app.listen(PORT);
}
