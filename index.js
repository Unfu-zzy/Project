const express = require("express");
const app = new express();

app.use(express.static('public'))
app.listen(4000, () => {
    console.log("App is listening to port 4000")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/index'))
});

app.get('/about', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/about'))
});

app.get('/contact', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/contect'))
});

app.get('/post', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/post'))
});