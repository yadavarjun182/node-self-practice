const express = require('express');
const app = express();

app.use(express.json());

// 
// || 
// 

app.post('/movies', (req, res, next) => {
    const { id, name, rating, description, genre, cast } = req.body;
    if (!id || !name || !rating || !description || !genre || !cast) {
        res.status(400).send('Bad Request field does not exist in body');
    } else if (typeof id !== 'number' || typeof name !== 'string' ||
        typeof rating !== 'number' || typeof description !== 'string' ||
        typeof genre !== 'string' ||
        !Array.isArray(cast)) {
        res.status(400).send('Bad Request');
    } else {
        next();
    }
});

app.post('/movies', (req, res) => {
    res.send(req.body);
});

app.listen(3006, () => {
    console.log("listening server at 3006 port")
});