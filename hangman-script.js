/**
 * Created by spycher_family on 10/26/2017.
 */
console.log("the ting goes skeyeeeyaaa");

/////////////////////////////////// WARNING FATTY ARRAYS COMING UP /////////////////////////////////////////////////////
var images = ["https://www.oligalma.com/downloads/images/hangman/files/10.jpg", "https://www.oligalma.com/downloads/" +
"images/hangman/files/9.jpg", "https://www.oligalma.com/downloads/images/hangman/files/8.jpg", "https://www.oligalma." +
"com/downloads/images/hangman/files/7.jpg", "https://www.oligalma.com/downloads/images/hangman/files/6.jpg", "https:/" +
"/www.oligalma.com/downloads/images/hangman/files/5.jpg", "https://www.oligalma.com/downloads/images/hangman/files/4." +
"jpg", "https://www.oligalma.com/downloads/images/hangman/files/3.jpg", "https://www.oligalma.com/downloads/images/ha" +
"ngman/files/2.jpg", "https://www.oligalma.com/downloads/images/hangman/files/1.jpg", "https://www.oligalma.com/downl" +
"oads/images/hangman/files/0.jpg"];

var cars = ["ferrari", "maserati", "ford", "toyota", "honda", "lotus", "chevrolet", "tesla", "nissan", "bmw", "mercedes"
, "audi", "fiat", "infiniti", "lexus", "porsche", "mazda", "renault", "opel", "bugatti", "acura", "lamborghini",
"kia", "peugot", "volkswagen", "mclaren", "jaguar", "subaru", "bentley", "geely", "hyundai", "suzuki", "citroen",
"dodge", "pagani", "mitsubishi", "abarth", "luxgen", "chery", "perodua", "maybach"];

var food = ["cheese", "tortellini", "ravioli", "pizza", "mascarpone", "biscuit", "muffin", "bread", "applesauce", "ar" +
"tichoke", "tuna", "antelope", "alfalfa", "avocado", "bruscetta", "bacon", "bagel", "bison", "burrito", "babaganoush",
"cabbage", "cake", "barley", "celery", "taco", "chips", "chocolate", "cookie", "chowder", "corn", "eggroll", "dates",
"dumplings", "doughnut", "chimichanga", "edimame", "fajita", "fondu", "gnocchi", "guacamole", "grapes", "gumbo", "ham" +
"burger", "honey", "hummus", "goose", "ham", "iberico", "icee", "incaberries", "jerky", "jam", "jalapeno", "jambalaya",
"kale", "kebab", "kiwi", "ketchup", "mustard", "mayonnaise", "lamb", "lobster", "linguine", "lasagna", "kingfish", "m" +
"eatballs", "milk", "milkshake", "noodles", "ostrich", "pizza", "pepperoni", "pancake", "spinach", "spaghetti", "veni" +
"son", "waffle", "walnut", "yogurt", "zucchini"];

var animals = ["cat", "kangaroo", "lynx", "lion", "monkey", "squirrel", "pelican", "zebra", "aardwolf", "crab",
"buffalo", "darter", "polecat", "lizard", "wallaby", "agouti", "albatross", "alpaca", "oppossum", "alligator", "parrot",
"badger", "beaver", "sheep", "antelope", "cow", "anteater", "fox", "armadillo", "elephant", "bat", "tortoise", "baboon",
"deer", "bear", "gecko", "sloth", "vulture", "crow", "mockingbird", "rhinoceros", "swan", "heron", "stork", "bulbul",
"blesbok", "cordon", "macaw", "crane", "catfish", "pug", "terrier", "peacock", "shark", "skink", "skunk", "dolphin",
"otter", "marshbird", "cobra", "python", "viper", "rattlesnake", "taod", "flamingo", "zorro", "wombat", "partridge",
"finch", "raccoon", "dragon", "dingo", "eagle", "emu", "yak", "starling"];

var randomWords = ["abstract", "random", "vinyl", "grave", "feather", "hose", "telescope", "science", "hello", "coppe" +
"r", "branch", "educated", "embrace", "truck", "tenuous", "venomous", "hum", "decisive", "notice", "unite", "ear", "p" +
"opcorn", "smell", "feeble", "hot", "intelligent", "deadpan", "cherries", "confess", "practice", "tin", "vegetable",
"prose", "undesirable", "beautiful", "chop", "ubiquitous", "worried", "lovely", "pretty", "smart", "cutest", "smash",
"adaptable", "spell", "profit", "motive", "incentive", "tender", "juicy", "thank", "vigorous", "optimal", "equilibrium",
"general", "large", "sparkling", "exclusive", "mushy", "queen", "sparkle", "light", "sigh", "fly", "exotic", "steer"];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var guessesLeft = 10;
var word = "";
var categories = [cars, food, animals, randomWords];
var previouslyGuessed = "";

function getWord(num) {
    var category = categories[num];
    var rand = Math.floor(Math.random() * category.length);
    word = category[rand];
}

function startGame() {
    correctLetters = 0;
    previouslyGuessed = '';
    guessesLeft = 10;
    document.getElementById('guessedLetters').innerHTML = '';
    document.getElementById('hangmanImage').src = images[10];
    document.getElementById('enterLetter').disabled = false;
    document.getElementById('guessesLeft').innerHTML = "10";
    document.getElementById('guessesLeftDiv').style.display = "block";
    document.getElementById('message').innerHTML = '';

    //getting word
    getWord(document.getElementById("categorySelect").value);

    //setting up board
    var board = document.getElementById("board");
    board.innerHTML = "";
    board.style.display = "inline-block";
    document.getElementById("guessLetterDiv").style.display = "block";
    for(var i = 0; i < word.length; i++) {
        board.innerHTML += '<div class='+word[i]+'></div>';
    }
}

function checkEnter(event) {
    //var char = event.which || event.keyCode;
    var char = event.keyCode;
    if(char === 13) {
        submitLetter();
    }
}

var correctLetters = 0;

function submitLetter() {
    var input = document.getElementById('enterLetter').value.toLowerCase();
    var inWord = false;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === input) {
            console.log("right guess");
            inWord = true;
            displayLetterInBoard(input);
            correctLetters++;
            console.log(correctLetters);
        }
    }

    if(!inWord) {
        console.log("wrong guess");
        wrongGuess(input);
    }

    document.getElementById("enterLetter").value = ''; //clears the input field

    if(correctLetters == word.length) {
        youWin();
    }
}

function youWin() {
    document.getElementById("message").innerHTML = '<p id="winner">YOU WIN!!</p>'
    document.getElementById("enterLetter").disabled = true;
}

function isLetter(a) {
    return a.toLowerCase() !== a.toUpperCase();
}

function wrongGuess(input) {
    var letter = input.toString();
    if(isLetter(letter) && previouslyGuessed.indexOf(letter) === -1) {
        guessesLeft--;
        document.getElementById('guessedLetters').innerHTML += '<p>'+letter+'</p>';
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        previouslyGuessed += letter;
        document.getElementById('hangmanImage').src = images[guessesLeft];

        if(guessesLeft == 0) {
            document.getElementById("board").innerHTML = '<p>GAME OVER</p> <br> <p>YOU LOSE</p>';
            document.getElementById('enterLetter').disabled = true;
            document.getElementById('message').innerHTML = 'The word was: ' + word;
        }
    }
}

function displayLetterInBoard(letter) {
    var divs = document.getElementsByClassName(letter);
    for(var i = 0; i< divs.length; i++) {
        divs[i].innerHTML = letter;
    }
}