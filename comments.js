// Create web server 

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

// Load data
let comments = require('./data/comments');

// Set view engine
app.set('view engine', 'ejs');

// Set middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set route
app.get('/', (req, res) => {
    res.render('index', {
        comments: comments
    });
});

app.get('/comments', (req, res) => {
    res.render('comments', {
        comments: comments
    });
});

app.get('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = comments.filter(comment => {
        return comment.id == id;
    })[0];
    res.render('comment', {
        comment: comment
    });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    let newComment = {
        id: comments.length + 1,
        name: req.body.name,
        content: req.body.content
    };
    comments.push(newComment);
    fs.writeFileSync('./data/comments.json', JSON.stringify(comments));
    res.redirect('/comments');
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));