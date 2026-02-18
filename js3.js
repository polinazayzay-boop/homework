document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  let isActive = false;

  button.addEventListener("click", function () {
    isActive = !isActive;

    if (isActive) {
      this.style.background = "linear-gradient(45deg, #4ecdc4, #44a08d)";
      this.style.margin = "30px";
      this.classList.add("active");
      this.textContent = " активировано!";
    } else {
      this.style.background = "";
      this.style.margin = "";
      this.classList.remove("active");
      this.textContent = "!жмай сюда!";
    }
  });

  button.addEventListener("mouseenter", function () {
    if (!isActive) {
      this.style.background = "#ff9ff3";
    }
  });

  button.addEventListener("mouseleave", function () {
    if (!isActive) {
      this.style.background = "";
    }
  });
});
