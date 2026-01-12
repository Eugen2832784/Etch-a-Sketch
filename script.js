const okno = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

const contSize = 500;

createGrid(getSize());

resetButton.addEventListener("click", () => {
  createGrid(getSize());
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

    square.addEventListener("mousemove", () => {
      square.style.backgroundColor = "black";
    });

    okno.appendChild(square);
  }
}
