const okno = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const rainbowButton = document.querySelector("#rainbow");
const contSize = 500;
const size = getSize();
createGrid(size);

resetButton.addEventListener("click", () => {
  createGrid(getSize());
});
rainbowButton.addEventListener("click", () => {
  okno.innerHTML = "";
  okno.style.width = contSize + "px";

  let squareSize = contSize / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid_square");

    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    let timesOn = 0;
    square.addEventListener("mousemove", () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    okno.appendChild(square);
  }
});

function getSize() {
  let input = Number(prompt("Enter square quantity (1-100)"));
  if (input >= 1 && input <= 100) return input;
  return 16;
}

function createGrid(size) {
  okno.innerHTML = "";
  okno.style.width = contSize + "px";

  let squareSize = contSize / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid_square");

    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    let timesOn = 0;
    square.addEventListener("mousemove", () => {
      timesOn++;
      let opacity = 0.1 * timesOn;
      if (timesOn >= 10) {
        opacity = 1;
      }
      square.style.backgroundColor = "black";
      square.style.opacity = opacity;
    });

    okno.appendChild(square);
  }
}
