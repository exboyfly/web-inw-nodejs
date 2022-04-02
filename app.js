const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World, NodeJS");
});

app.listen(3000, () => {
    console.log("Port Listening to: 3000");
});

