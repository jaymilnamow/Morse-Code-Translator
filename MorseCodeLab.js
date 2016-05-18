console.log("Welcome to Mils' Morse Code Converter!")
var translateFrom = prompt("Enter text and I'll translate it to Morse Code:");
var translateFromArray = translateFrom.toLowerCase().split("");

var completedTranslation= "";

var morseCode = {
    'a' : '.-',
  	'b' : '-...',
  	'c' : '-.-.',
  	'd' : '-..',
  	'e' : '.',
  	'f' : '..-.',
  	'g' : '--.',
  	'h' : '....',
  	'i' : '..',
  	'j' : '.---',
  	'k' : '-.-',
  	'l' : '.-..',
  	'm' : '--',
  	'n' : '-.',
  	'o' : '---',
  	'p' : '.--.',
  	'q' : '--.-',
  	'r' : '.-.',
  	's' : '...',
  	't' : '-',
  	'u' : '..-',
  	'v' : '...-',
  	'w' : '.--',
  	'x' : '-..-',
  	'y' : '-.--',
  	'z' : '--..',
  	'1' : '.----',
  	'2' : '..---',
  	'3' : '...--',
    '4' : '....-',
    '5' : '.....',
    '6' : '-....',
    '7' : '--...',
    '8' : '---..',
    '9' : '----.',
    '0' : '-----',
    '.' : '.-.-.-',
    ',' : '--..--',
    '?' : '..--..',
    '/' : '-..-.',
    ' ' : '|'
}

for (var i=0; i<translateFromArray.length; i++){
  var temp = translateFromArray[i];
  completedTranslation += morseCode[temp];
}

document.getElementById("result").innerHTML = completedTranslation;
