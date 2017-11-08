/**
 * Created by spycher_family on 10/26/2017.
 */
console.log("the ting goes popopop");

var guessesLeft = 10;
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
    //setting up board
    var board = document.getElementById("board");
    board.innerHTML = "";
    board.style.display = "inline-block";
    document.getElementById("guessDiv").style.display = "block";
    var word = getWord(document.getElementById("categorySelect").value);
    for(var i = 0; i < word.length; i++) {
        board.innerHTML += '<div class='+word[i]+'></div>';
    }
}

function checkEnter(event) {
    //var char = event.which || event.keyCode;
    var char = event.keyCode;
    document.getElementById("demo").innerHTML = "Unicode CHARACTER code: " + char;
    if(char === 13) {
        submitLetter();
    }
}

function submitLetter() {
    console.log("letter submitted");
    var input = document.getElementById('enterLetter').value;
    var categoryNum = document.getElementById("categorySelect").value;
    var word = getWord(categoryNum);
    var inWord = false;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === input) {
            console.log("right guess");
            inWord = true;
            displayLetterInBoard(input);
        }
    }

    if(!inWord) {
        console.log("wrong guess");
        wrongGuess(input);
    }
}

function wrongGuess(letter) {

}

function displayLetterInBoard(letter) {
    var divs = document.getElementsByClassName(letter);
    for(var i = 0; i< divs.length; i++) {
        divs[i].innerHTML = letter;
    }
}