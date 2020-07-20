let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners.
    setupModeButtons();

    // setup squares.
    setupSquares();

    reset();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add listeners to squares.
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function reset() {
    // generate new colors.
    colors = generateRandomColors(numSquares);
    // pick new random color from array.
    pickedColor = pickColor();
    // change color display to match picked color.
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "New Colors"
    messageDisplay.textContent = "";
    // change colors of squares on page.
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

// Changes all square colors to a specific color.
function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Returns random number between 0 and length of colors.
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Generates an array of random colors.
function generateRandomColors(num) {
    let arr = []

    for (let i = 0; i < num; i++) {
        // get random color and push into array.
        arr.push(randomColor());
    }

    return arr;
}

// generates a random rgb color.
function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}