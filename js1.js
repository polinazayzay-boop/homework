document.addEventListener("DOMContentLoaded", function () {
  // let str = "absde";
  // alert(str[0]);
  // alert(str[1]);
  // alert(str[4]);

  // let a = parseInt(prompt("Введите первое число:"));
  // let b = parseInt(prompt("Введите второе число:"));
  // console.log(a > 0 || b > 0);

  let age = parseInt(prompt("Возраст пользователя"));
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
});
