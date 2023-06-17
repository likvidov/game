'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let getRandomNumber = function () {
  return 1 + Math.floor(Math.random() * 100)
};

const game = function (randomNumber) {
  let number = prompt('Угадай число от 1 до 100');

  if (number === null) {
    alert("Игра окончена");;
  } else if (!isNumber(number)) {
    alert('Введите число');
    game(randomNumber);
  } else if (number > randomNumber) {
    alert('Загаданное число меньше');
    game(randomNumber);
  } else if (number < randomNumber) {
    alert('Загаданное число больше');
    game(randomNumber);
  } else if (number == randomNumber) {
    alert('Поздравляю, Вы угадали!!!');
  }
}

game(getRandomNumber());