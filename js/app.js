// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Hold the generated sentence
var textToSpeak = '';

// Get references to HTML elements (Updated to match the correct IDs)
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjButton = document.getElementById('adjButton');
var noun2Button = document.getElementById('noun2Button');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton');
var randomButton = document.getElementById('randomButton');
var storyParagraph = document.getElementById('storyParagraph');

// Arrays for words
var nouns = ["dog", "cat", "bird", "fish", "cow"];
var verbs = ["jumps", "runs", "flies", "eats", "sings"];
var adjectives = ["happy", "sad", "angry", "excited", "brave"];
var secondNouns = ["ball", "toy", "bone", "stick", "hat"];
var places = ["park", "home", "beach", "forest", "zoo"];

// Variables to hold the current selections
var currentNoun = '';
var currentVerb = '';
var currentAdj = '';
var currentNoun2 = '';
var currentPlace = '';

/* Functions
-------------------------------------------------- */
function generateRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//to update the displayed story
function updateStory() {
    textToSpeak = `The ${currentAdj} ${currentNoun} ${currentVerb} the ${currentNoun2} at the ${currentPlace}.`;
    storyParagraph.textContent = textToSpeak;
}

//to reset the story to its initial state
function resetStory() {
    // Reset all variables to their initial state
    currentNoun = '';
    currentVerb = '';
    currentAdj = '';
    currentNoun2 = '';
    currentPlace = '';
    textToSpeak = '';
    
    // Update the story paragraph text
    storyParagraph.textContent = 'Your sentence will appear here...';
}

// Function to generate a random complete sentence
function generateRandomSentence() {
    currentNoun = generateRandomWord(nouns);
    currentVerb = generateRandomWord(verbs);
    currentAdj = generateRandomWord(adjectives);
    currentNoun2 = generateRandomWord(secondNouns);
    currentPlace = generateRandomWord(places);
    updateStory();
}

/* Event Listeners
-------------------------------------------------- */
speakButton.onclick = function() {
    if (textToSpeak) {
        speakNow(textToSpeak);
    } else {
        alert('Please generate a story before speaking.');
    }
};
// Button click event handlers
nounButton.onclick = function() {
    currentNoun = generateRandomWord(nouns);
    updateStory();
};

verbButton.onclick = function() {
    currentVerb = generateRandomWord(verbs);
    updateStory();
};

adjButton.onclick = function() {
    currentAdj = generateRandomWord(adjectives);
    updateStory();
};

noun2Button.onclick = function() {
    currentNoun2 = generateRandomWord(secondNouns);
    updateStory();
};

placeButton.onclick = function() {
    currentPlace = generateRandomWord(places);
    updateStory();
};

resetButton.onclick = function() {
    resetStory();
};


// Event listener for the "Generate Random Sentence" button
randomButton.onclick = function() {
    generateRandomSentence();
};

// Function to speak the text using the SpeechSynthesis API
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string); // Create a new speech object, attaching the string of text to speak
    synth.speak(utterThis); // Actually speak the text
}
