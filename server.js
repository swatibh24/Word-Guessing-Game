const express = require('express');
const app = express();
const PORT = 3000;
const words = require ('./words');//list of words file
const constants = require ('./constants');// random word and constants file
const gameWeb = require ('./game-web');// return web page
let gameId;
app.use(express.static('./public'));

//When first tym page is loaded
app.get('/', (req, res) => {
    constants.clearMessage();
    res.send(gameWeb.gamePage(gameId,words));
})

//After New Game is started it is redirected to start
app.get('/start', (req, res) => {
    gameId= constants.randomIdGenertor(words);//generate random gameID unique to user
    const userGuess=`Lets start playing!`.italics();
    const text=`The word is ${words[gameId.substring(4,5)].length} letters`.italics();
    constants.addMessage({gameId,userGuess,text});
    console.log("Unique game id is >>>>"+gameId);
    console.log("Secret word to play the game is  >>>"+words[gameId.substring(4,5)]);
    res.send(gameWeb.gamePage(gameId,words));
})

//After User guess is submitted it si redirected to dashboard
app.get('/dashboard', (req, res) => {
    res.send(gameWeb.gamePage(gameId,words));
})
// it is called when we click start a new game
app.post('/game-web', express.urlencoded({ extended: true }), (req, res) =>{
    gameId=req.body.gameId;
    res.redirect('/start');
});

// it is called when user enters a new guess and submit it.
app.post('/submit-user-guesses', express.urlencoded({ extended: true }), (req, res) => {
    gameId=req.body.gameId;
    console.log(JSON.parse(JSON.stringify(req.body)));
    const userGuess=req.body.text;
    const text=gameWeb.checkUserGuesses(words,gameId,userGuess);
    constants.addMessage({gameId,userGuess,text});
    res.redirect('/dashboard');
});

//port listen to 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

