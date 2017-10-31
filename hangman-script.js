/**
 * Created by spycher_family on 10/26/2017.
 */

var cars = [];
var food = [];
var animals = [];
var randomWords = [];

var categories = [cars, food, animals, randomWords];

function getWord(num) {
    var category = categories[num];
    var rand = Math.floor(Math.random() * category.length);
    return category[rand];
}
