function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = ""; 

  for (let i = 0; i < 10; i++) {
    
    let color = getRandomColor();
    let box = document.createElement("div");
    box.classList.add("color-box");
    box.style.background = color;

   
    let hex = document.createElement("div");
    hex.classList.add("hex");
    hex.innerText = color;

   
    box.addEventListener("mouseenter", () => {
      let newColor = getRandomColor();
      box.style.background = newColor;
      hex.innerText = newColor;
    });

    box.appendChild(hex);
    palette.appendChild(box);
  }
}


window.onload = generatePalette;
