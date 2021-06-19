const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("We Are in Homme");
})

app.listen(3000, () => {
    console.log('Server is Running on Port : 3000');
})