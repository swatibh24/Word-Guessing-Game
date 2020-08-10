/**This file holds constants ,random gameId generator and result list which is visible to user**/

const userGuessArray = [];//this array hold user guess,result and secret gamId
const resultUserGuessArray = [];//this array return list as per gameId
let turns=0;

//function to push in array
function addMessage({ gameId,userGuess, text }) {
    userGuessArray.push({gameId,userGuess, text});
}
//clear user array on page load
function clearMessage() {
    constants.userGuessArray.length=0;
    constants.turns=0;

}

//this function generates random gameid
function randomIdGenertor(words,play){

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const gameID = Math.floor(Math.random() * words.length); //select random number from list of words returned from messages
    let result = "";
    for (let i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result.concat('-',gameID);

}

const constants = {
    randomIdGenertor,
    userGuessArray,
    resultUserGuessArray,
    addMessage,
    clearMessage,
    turns,
};

module.exports = constants;

