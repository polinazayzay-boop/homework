document.addEventListener("DOMContentLoaded", function () {
  const coords = document.getElementById("coords");

  window.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;

    coords.style.left = x + "px";
    coords.style.top = y + "px";

    coords.textContent = "X: " + x + ", Y: " + y;

    if (x > window.innerWidth / 2) {
      coords.style.color = "blue";
    } else {
      coords.style.color = "green";
    }
  });
});
