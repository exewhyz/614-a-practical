const textarea = document.querySelector("#text"); //textarea

const counter = document.querySelector("#counter"); //h5

const count = document.querySelector("#count"); //span

textarea.addEventListener("input", (event) => {
  const cuurentLength = event.target.value.length;
  const maxLength = event.target.maxLength;
  count.innerText = cuurentLength;
  if (cuurentLength >= maxLength) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});
