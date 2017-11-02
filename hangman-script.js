/**
 * Created by spycher_family on 10/26/2017.
 */
console.log("hello");

var cars = ["ferrari", "maserati", "ford", "toyota"];
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


}

function submitLetter() {
    var letter = document.form.elements[0].value;
    var categoryNum = document.getElementById("categorySelect").value;
    var word = getWord(categoryNum);
    for(var i = 0; i < word.length; i++) {
        if(word[i] == letter) {

        }
    }
}