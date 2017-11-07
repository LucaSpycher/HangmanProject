/**
 * Created by spycher_family on 10/26/2017.
 */
console.log("hello");

var cars = ["ferrari", "maserati", "ford", "toyota", "honda", "lotus", "chevrolet"];
var food = ["cheese", "tortellini", "ravioli", "pizza", "mascarpone", "biscuit", "muffin", "bread"];
var animals = ["dog", "cat", "kangaroo", "lynx", "lion", "monkey", "squirrel", "pelican"];
var randomWords = ["abstract", "random", "vinyl", "grave", "feather", "hose", "telescope", "science"];

var categories = [cars, food, animals, randomWords];

function getWord(num) {
    var category = categories[num];
    var rand = Math.floor(Math.random() * category.length);
    return category[rand];
}

function startGame() {
    var board = document.getElementById("board");
    board.innerHTML = "";
    board.style.display = "inline-block";
    document.getElementById("guessDiv").style.display = "block";
    var word = getWord(document.getElementById("categorySelect").value);
    for(var i = 0; i < word.length; i++) {
        board.innerHTML += '<div class='+word[i]+'></div>';
    }
}

function submitLetter() {
    var input = document.getElementById('enterLetter').value;
    var categoryNum = document.getElementById("categorySelect").value;

    var word = getWord(categoryNum);
    for(var i = 0; i < word.length; i++) {
        if(word[i] == input) {

        }
    }
}

function checkUserInput() {

}