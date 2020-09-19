//main quiz script.js

//get useable elements 
var centerBoard = document.getElementById("centerBoard");
var questionText = document.getElementById("questionText");
var questionImg = document.getElementById("questionImg");
var answerBar = document.getElementById("answerBar");
var correctBoard = document.getElementById("correctBoard");
var incorrectBoard = document.getElementById("incorrectBoard");
var resultsBoard = document.getElementById("resultsBoard");
var resultsText = document.getElementById("resultsText");

//set title text including it's innerHTML
var titleText = document.getElementById("titleText");
titleText.innerHTML = title;

//declare question number 
var questionNumber = 0;

//declare isCorrect
var isCorrect = false;

//declare score 
var score = 0;

//declare mainDisplay 
var mainDisplay = "block";

//start question 
function startQuestion(givenQuestionNumber){	
	//make main board visible only 
	centerBoard.style.display = mainDisplay;
	incorrectBoard.style.display = "none";
	correctBoard.style.display = "none";
	resultsBoard.style.display = "none";
	
	//set question number 
	questionNumber = givenQuestionNumber;
	
	//set question text 
	questionText.innerHTML = questions[questionNumber][0];
	
	//set question image 
	if(questions[questionNumber][1] != ""){
		questionImg.src = questions[questionNumber][1];
		questionImg.style.display = "block";
	} else {
		questionImg.style.display = "none";
	};	
	
	//click answer bar 
	answerBar.select();
};

//check answer 
function checkAnswer(){
	//reset isCorrect 
	isCorrect = false;
	
	//check if answer matches given answers 
	for(i = 2; i < questions[questionNumber].length; i++){
		//check if answer matches the correct answer(s)
		if(answerBar.value.toLowerCase() == questions[questionNumber][i].toLowerCase()){
			//correct
			isCorrect = true;
		};
	};
	
	//clear answerbox 
	answerBar.value = "";
	
	//check if correct 
	if(isCorrect == true){
		score ++;
		
		//make correct board visible and main board invisible
		centerBoard.style.display = "none";
		correctBoard.style.display = mainDisplay;
	} else {
		//make incorrect board visible and main board invisible
		centerBoard.style.display = "none";
		incorrectBoard.style.display = mainDisplay;
		incorrectText.innerHTML = "Incorrect!<br/><br/>The correct answer was: " + questions[questionNumber][2];
	};
};

//next question 
function nextQuestion(){
	//start next question if it exists 
	if(questionNumber < questions.length - 1){
		//start next question 
		startQuestion(questionNumber + 1);
	} else {
		//display finishing board 
		centerBoard.style.display = "none";
		incorrectBoard.style.display = "none";
		correctBoard.style.display = "none";
		resultsBoard.style.display = mainDisplay;
		resultsText.innerHTML = "Quiz Complete!<br/><br/>You scored " + score + " out of " + questions.length;
	};
};

//return to menu 
function returnToMenu(){
	//go back to index 
	window.location.href = "index.html";
};

//add event listener 
document.addEventListener("keydown",function(e){
	//get key code 
	if(e.keyCode == 13){
		//decide what to do 
		if(centerBoard.style.display == mainDisplay){
			//mark question 
			checkAnswer();
		} else if(incorrectBoard.style.display == mainDisplay || correctBoard.style.display == mainDisplay){
			//next question 
			nextQuestion();
		} else if(resultsBoard.style.display == mainDisplay){
			//return to menu 
			returnToMenu();
		};
	};
});

//start question 0 
startQuestion(0);