var word = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"haircut",
	"program",
	"csharp",
	"golang",
	"kotlin",
	"earth",
	"exercise",
	"ruby",
    "rabbit",
    "snail",
    "airport",
    "carrots",
    "river",
    "mountain",
    "house",
    "kitten",
    "crown",
    "volleyball",
    "bird",
    "fireman",
    "toothpaste",
    "popcorn",
    "thirty",
    "twenty",
    "forty",
    "ninety",
    "hundred"
]

var word = word[Math.floor(Math.random() * word.length)];
var answerArray =[];
 for( var i = 0 ; i < word.length; i++){
    answerArray[i] ="_";
 }
var remainingLetter = word.length;

while (remainingLetter > 0){
    alert (answerArray.join(" "));
    
    var guess = prompt(" Guess a letter , or click cancle to stop playing ")
    
    if(guess ==null){

        break;
    } else if (guess.length !== 1){

        alert("Please enter a single letter");
    }else{

        for(var j = 0; j < words.length; j++){

            if (word[j]===guess){
                answerArray[j] = guess;
                remainingLetter--;   
            }
        }

    }
   alert(answerArray.join(" "));
   alert(" Good Job! The answer was " + word );
}
