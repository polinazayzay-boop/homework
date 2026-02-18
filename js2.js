document.addEventListener("DOMContentLoaded", function () {
  //   let age = parseInt(prompt("Введите ваш возраст"));
  //   if (age < 65) {
  //     alert("Вам еще рано на пенсию");
  //   } else {
  //     alert("Поздравляем с пенсионным возрастом");
  //   }
  //   let num1 = parseInt(prompt("Введите первое число"));
  //   let num2 = parseInt(prompt("Введите второе число"));
  //   if (num1 > num2) {
  //     console.log("Первое число больше второго");
  //   } else if (num2 > num1) {
  //     console.log("Первое число меньше второго");
  //   } else if (num1 === num2) {
  //     console.log("Числа равны");
  //   }
  //   let number = parseInt(prompt("Введите число"));
  //   if (number % 2 === 0) {
  //     console.log("Это четное число");
  //   } else {
  //     console.log("Это не четное число");
  //   }
  //   const secretNumber = 8;
  //   let guess = parseInt(prompt("Угадай число от 1 до 10"));
  //   if (secretNumber === guess) {
  //     alert("Вы угадали! :3");
  //   } else {
  //     alert("Вы не угадали :(");
  //   }

  const login = prompt("Введите логин:");
  const password = prompt("Введите пароль:");
  if (login === "admin" && password === "12345") {
    console.log("Добро пожаловать!");
  } else {
    console.log("Неверный логин или пароль");
  }

  const year = prompt("Введите год:");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Это високосный год");
  } else {
    console.log("Это не високосный год");
  }

  const number = prompt("Введите число:");
  if (number > 100) {
    console.log("Большое число");
  } else if (number < 100) {
    console.log("Маленькое число");
  } else {
    console.log("Точно 100!");
  }
});
