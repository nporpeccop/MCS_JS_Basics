console.log ("You are at: " + window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
let message;
if (computer == rock) message = 
	(player == rock ? "draw" : (player == scissors ? "computer win" :
		(player == paper ? "player win" : "you're cheating!")
	))
else if (computer == scissors) message = 
	(player == rock ? "player win" : (player == scissors ? "draw" :
		(player == paper ? "computer win" : "you're cheating!")
	))
else if (computer == paper) message = 
	(player == rock ? "computer win" : (player == scissors ? "player win" :
		(player == paper ? "draw" : "you're cheating!")
	))
else message = "computer has a headache!";
console.log ("player: " + player + ", computer: " + computer + " -> " + message)