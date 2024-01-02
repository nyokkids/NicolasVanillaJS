const images = ["01.jpg", "02.jpg", "04.png", "03 1.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.style.maxWidth = "100%"; // Set max-width for responsiveness
bgImage.style.height = "auto"; // Maintain aspect ratio
document.body.appendChild(bgImage);

const parent = document.getElementById("parentDiv");
const addChildDiv = document.createElement("div");
addChildDiv.innerHTML = "add child : world!";
parent.appendChild(addChildDiv, bgImage);
