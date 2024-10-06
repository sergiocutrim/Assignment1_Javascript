// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

//Created 5 arrays with the words that are on the toy to be selected randomly
var array1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var array2 = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
var array3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var array4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var array5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

var textToSpeak = 'This is the text string that you will generate with your script';
//Create a var to reference the button that does a random sentence
var speakButton = document.querySelector('#btn6');
//New array to store the words that are randomly chosen
var chosenWords = Array(5).fill('');
//var to display the text that was random when clicked the buttons 1 to 5
var outputElement = document.getElementById('output');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
//This function will randomly choose any item of an array when it is called
function speakRandomFromArray(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length); //used formula on the exercise for random
	var randomText = arr[randomIndex]; //store the word in a new array
	console.log(randomText); //print in the console to check
	synth.speak(new SpeechSynthesisUtterance(randomText)); //speak the selected word
	return randomText; 
}
//This function prints the words chosen in the screen
function updateOutput() {
    outputElement.textContent = chosenWords.join(' ');
}
//Function to generate a random story for button generate story
function generateRandomStory() {
	//selecta a random from all the arrays
	var noun1 = speakRandomFromArray(array1);
    var verb = speakRandomFromArray(array2);
    var adjective = speakRandomFromArray(array3);
    var noun2 = speakRandomFromArray(array4);
    var place = speakRandomFromArray(array5);
	//returns all the chosen ones
	return `${noun1} ${verb} ${adjective} ${noun2} ${place}.`;
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
//Each button will call the function of random, btn1,2,3,4,5
document.getElementById('btn1').onclick = function() {
	chosenWords[0] = speakRandomFromArray(array1);
	updateOutput();
};
document.getElementById('btn2').onclick = function() {
	chosenWords[1] = speakRandomFromArray(array2);
	updateOutput();
};
document.getElementById('btn3').onclick = function() {
	chosenWords[2] = speakRandomFromArray(array3);
	updateOutput();
};
document.getElementById('btn4').onclick = function() {
	chosenWords[3] = speakRandomFromArray(array4);
	updateOutput();
};
document.getElementById('btn5').onclick = function() {
	chosenWords[4] = speakRandomFromArray(array5);
	updateOutput();
};
//button to generate the entire story
document.getElementById('generateStory').onclick = function() {
    var randomStory = generateRandomStory();
    speakNow(randomStory);
	outputElement.textContent = randomStory;
}
//button to speak all that was selected, even if it is incomplete
speakButton.onclick = function() {
	textToSpeak = chosenWords.join(' ');
	speakNow(textToSpeak);
}
//button to reset the text and clear the array
document.getElementById('reset').onclick = function() {
    chosenWords = []; 
    updateOutput(); 
};