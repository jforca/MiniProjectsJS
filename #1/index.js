const body = document.getElementsByTagName("body")[0];
const title = document.getElementsById("title");

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
  title.style.color = color;
}

function randomTitle() {
  const red1 = Math.round(Math.random() * 255);
  const green2 = Math.round(Math.random() * 255);
  const blue3 = Math.round(Math.random() * 255);

  const color2 = `rgb(${red1}, ${green2}, ${blue3})`;
  title.style.color = color2;
}
