const canvas = document.querySelector("#canvas");
const color = document.querySelector("#color");
const size = document.querySelector("#size");
const clear = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", (event) => {
  drawing = true;
  ctx.strokeStyle = color.value;
  ctx.lineWidth = size.value;
  ctx.lineCap = "round";
  ctx.lineJoin = "round"
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
  if (!drawing) return;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseleave", () => (drawing = false));
