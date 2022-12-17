let variant = 7;
let clickedOnFirstItem = false;
let clickedOnSecondItem = false;
const firstNumber = variant % 10 + 1;
const secondNumber = variant % 10 + 1 + 1;
    window.onload = function () {
        document.body.children[firstNumber].addEventListener("click", () => {
            const backgroundColor = clickedOnFirstItem ? 'blue' : 'red'
            const textColor = clickedOnFirstItem ? 'grey' : 'orange'
            console.log('btn1 clicked');
            document.getElementById("u-list").style.background = backgroundColor;
            document.getElementById("u-list").style.color = textColor;
            clickedOnFirstItem = true;
        })
        document.body.children[secondNumber].addEventListener("click", () => {
            const backgroundColor = clickedOnSecondItem ? 'yellow' : 'red'
            const textColor = clickedOnSecondItem ? 'green' : 'purple'
            console.log('btn2 clicked');
            document.querySelector("#ordered-list").style.background = backgroundColor;
            document.querySelector("#ordered-list").style.color = textColor;
            clickedOnSecondItem = true;

        });
    }
function add() {
    document.getElementById("mun").style.display = 'initial';
}

function zoomIn() {
    const GFG = document.getElementById("mun");
    const currWidth = GFG.clientWidth;
    const currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
    GFG.style.width = (currWidth + 100) + "px";
}

function zoomOut() {
    const GFG = document.getElementById("mun");
    const currWidth = GFG.clientWidth;
    const currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
    GFG.style.width = (currWidth - 100) + "px";
}

function remove() {
    document.getElementById("mun").style.display = 'none';
}