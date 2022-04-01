'use strict';

let numBot = getRandomInt(1, 100);
//numBot = 99;
let numUser;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isNumber = function(num) {
    return !isNaN((parseFloat(num))) && isFinite(num);
}

func();

function func() {

    do {
         numUser = +prompt('Угадай число от 1 до 100');
         if (!isNumber(numUser)) {
             alert('Введи число!');
         }
    } while (!isNumber(numUser));

if (numUser === null || numUser === undefined || numUser === 0) {
    alert('Игра окончена');
} else if (numUser > numBot) {
    alert('Загаданное число меньше');
    func(); // рекурсия
} else if (numUser < numBot) {
    alert('Загаданное число больше');
    func(); // рекурсия
} else if (numUser === numBot) {
    alert('Поздравляю, Вы угадали!!!');
} 
}
