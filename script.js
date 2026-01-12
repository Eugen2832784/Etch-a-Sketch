const okno = document.querySelector("#container");
let inputNum = pageOpen();

let size = 16;

if (inputNum >= 1 && inputNum <= 100) {
  size = inputNum;
}

okno.innerHTML = "";
okno.style.width = "500px";
let squareSize = 500 / size;

for (let i = 0; i < size * size; i++) {
  const square = document.createElement("div");
  square.classList.add("grid_square");

  square.style.width = squareSize + "px";
  square.style.height = squareSize + "px";

  okno.appendChild(square);

  square.addEventListener("mousemove", () => {
    square.style.backgroundColor = "black";
  });
}

function pageOpen() {
  return Number(prompt("Enter square quantity (1-100)"));
}
