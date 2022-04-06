const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    
    //res.send('hello')
    res.render('index')

})

app.listen(PORT, () => {
    console.log("Port Listening to: " + PORT)
})

