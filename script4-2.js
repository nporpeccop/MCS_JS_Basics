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
if (computer == rock) {
	if (player == rock) {
		message = "Draw"
	} else if (player == scissors) {
		message = "computer win"
	} else if (player == paper) {
		message = "player win"
	} else {
		message = "you're cheating!"
	}
} else if (computer == scissors) {
	if (player == rock) {
		message = "player win"
	} else if (player == scissors) {
		message = "Draw"
	} else if (player == paper) {
		message = "computer win"
	} else {
		message = "you're cheating!"
	}
} else if (computer == paper) {
	if (player == rock) {
		message = "computer win"
	} else if (player == scissors) {
		message = "player win"
	} else if (player == paper) {
		message = "Draw"
	} else {
		message = "you're cheating!"
	}
} else {
	message = "computer has a headache!"
}
console.log ("player: " + player + ", computer: " + computer + " -> " + message)