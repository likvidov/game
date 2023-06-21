'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let getRandomNumber = function () {
  return 1 + Math.floor(Math.random() * 100)
};

const game = function (randomNumber, counterTry = 3) {
  let number = prompt('Угадай число от 1 до 100');
  console.log(randomNumber);
  let count = counterTry;

  if (number == null) {
    return alert("Игра окончена");
  }

  if (!isNumber(number)) {
    alert('Введите число');
    game(randomNumber, count);
  }

  --count;

  if (number > randomNumber && count > 0) {
    alert('Загаданное число меньше, осталось попыток ' + count);
    game(randomNumber, count);
  }
  if (number < randomNumber && count > 0) {
    alert('Загаданное число больше, осталось попыток ' + count);
    game(randomNumber, count);
  }

  if (number == randomNumber && count >= 0) {
    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
      game(getRandomNumber())
    }
  }

  if (count <= 0) {
    if (confirm('Попытки закончились, хотите сыграть еще?')) {
      game(getRandomNumber())
    }
  }
}

game(getRandomNumber());