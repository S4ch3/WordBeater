window.addEventListener('load', init);
//import { words } from './bundle.js';
//global variables
let time = 5;
let score = 0;
let isPlaying;

// dom variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

  
//const words = ['hat','cat','bat','math','quack'];
const words = require('an-array-of-english-words');


//initialize game

function init()
{
    showWord(words);
    wordInput.addEventListener('input', startToPlay);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 100);
}

function startToPlay()
{
    if(matchWords())
    {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score++;
    }
    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    } else{
    scoreDisplay.innerHTML = score;
    }
}
   

function matchWords()
{
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML = 'YES';
        return true;
    } else {
        message.innerHTML ='';
        return false;
    }
}


function countdown()
{
if(time > 0)
{
    time--;
} else if(time === 0)
{
    isPlaying = false;
}
    timeDisplay.innerHTML = time;
}

function checkStatus()
{
    if (!isPlaying && time===0)
    {
        message.innerHTML = "Nice Try! Game Over.";
        score = -1;
    }
}

function showWord(words)
{
   const randIndex = Math.floor(Math.random() * words.length);
   currentWord.innerHTML = words[randIndex];
}
