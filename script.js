let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

/* Generating random HEX colors */

const getRandomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
};

color1.value = getRandomColor();
color2.value = getRandomColor();

/* Setting the chosen colors as a part of gradient */

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
};

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
