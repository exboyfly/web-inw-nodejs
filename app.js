const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Hello World, NodeJS");
});

app.listen(PORT, () => {
    console.log("Port Listening to:" + PORT);
});

