const express = require("express");
const PORT = process.env.PORT ? process.env.PORT : 1337;
const app = express();

const tweets = [
    {
        content: "Hello there",
        author: "Superman"
    },
    {
        content: "Hi hi",
        author: "Lex Luthor"
    },
    {
        content: "What is this",
        author: "Batman"
    }
];

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', { tweets: tweets });
});

app.post('/tweet', function(req, res) {
    console.log('Here in tweet post');
    console.log(req.body);
    tweets.push({
        content: req.body.content,
        author: req.body.author
    });
    res.redirect('/');
});

app.listen(PORT, function(req, res) {
    console.log("Server started at port ", PORT);
});