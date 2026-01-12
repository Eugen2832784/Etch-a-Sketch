const okno = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("grid_square");
  okno.appendChild(square);
  square.addEventListener("mousemove", function () {
    square.style.cssText = "background-color: black;";
  });
}
