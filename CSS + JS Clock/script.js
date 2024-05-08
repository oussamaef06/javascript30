const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondsDegrees = (second / 60) * 360 + 90;

  const minut = now.getMinutes();
  const minutesDegrees = (minut / 60) * 360 + 90;

  const hour = now.getHours();
  const houresDegrees = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${houresDegrees}deg)`;
}
setInterval(setDate, 1000);