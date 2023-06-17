'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let getRandomNumber = function () {
  return 1 + Math.floor(Math.random() * 100)
};

const game = function (randomNumber, counterTry = 10) {
  let number = prompt('Угадай число от 1 до 100');
  --counterTry;

  if (number === null) {
    alert("Игра окончена");
  } else if (!isNumber(number)) {
    alert('Введите число');
    game(randomNumber);
  } else if (number > randomNumber && counterTry > 0) {
    alert('Загаданное число меньше, осталось попыток ' + counterTry);
    game(randomNumber, counterTry);
  } else if (number < randomNumber && counterTry > 0) {
    alert('Загаданное число больше, осталось попыток ' + counterTry);
    game(randomNumber, counterTry);
  } else if (number == randomNumber) {
    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
      game(getRandomNumber(), 10)
    }
  } else {
    if (confirm('Попытки закончились, хотите сыграть еще?')) {
      game(getRandomNumber(), 10)
    }
  }
}

game(getRandomNumber());