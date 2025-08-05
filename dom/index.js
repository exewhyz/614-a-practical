let element = document.querySelector("#first");

element.innerHTML = "<button>Click Me</button>";

element.style.backgroundColor = "yellow";
element.style.padding = "10px";

element.classList.add("new-class");
element.classList.remove("container");

let img = document.createElement("img");

img.src =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

img.alt = "nature image";

img.style.width = "100px";
img.style.height = "50px";
img.style.borderRadius = "20px";

document.body.appendChild(img);

const btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     btn.innerText = "Clicked"
//     btn.style.backgroundColor = "red"
//     btn.style.color = "white"

// })



//navigate to different link
// const change = () => {
//     window.location.href = "https://google.com"
// };