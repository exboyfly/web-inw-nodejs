const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello World, NodeJS");
});

app.listen(PORT, () => {
    console.log("Port Listening to: " + PORT);
});

