document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const button = document.getElementById("clickbutt");
  const display = document.getElementById("clickcount");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    count++;
    display.textContent = count;

    if (count >= 15) {
      button.disabled = true;
      message.textContent = "максимум!";
    }
  });

  ///////////////////////////////

  let count_2 = 10;
  const display_2 = document.getElementById("timer");
  const resetButton = document.getElementById("resetbutt");
  let interval;

  function startTimer() {
    interval = setInterval(function () {
      count_2--;
      display_2.textContent = count_2;

      if (count_2 <= 0) {
        clearInterval(interval);
        display_2.textContent = "время В С Е!";
      }
    }, 1000);
  }

  resetButton.addEventListener("click", function () {
    clearInterval(interval);
    count_2 = 10;
    display_2.textContent = count_2;
    startTimer();
  });

  startTimer();

  /////////////////////////////////

  let count_3 = 0;
  let int;
  const display_3 = document.getElementById("timer_2");
  const start = document.getElementById("start_button");
  const stop = document.getElementById("stop_button");
  const reset = document.getElementById("reset_button");

  start.addEventListener("click", function () {
    if (!int) {
      int = setInterval(function () {
        count_3++;
        display_3.textContent = count_3;
      }, 1000);
    }
  });

  stop.addEventListener("click", function () {
    clearInterval(int);
    int = null;
  });

  reset.addEventListener("click", function () {
    clearInterval(int);
    int = null;
    count_3 = 0;
    display_3.textContent = count_3;
  });
});
