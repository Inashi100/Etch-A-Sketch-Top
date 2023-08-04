let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
   createBoard(32);
   document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw = document.querySelector("#draw");
        if (click){
            draw.innerHTML = "Now You can Draw";
        }
        else{
            draw.innerHTML = "You're Not allowed To Draw" 
        }
    }
   })
   let btn_popup = document.querySelector("#popup");
   btn_popup.addEventListener("click", function(){
    let size = getsize();
    createBoard(size);
   })
})

function createBoard(size){
    let board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorsquare);
    board.insertAdjacentElement("beforeend", square);
}

}
function getsize(){
    let input = prompt("what board size?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number"
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Enter a number between 1 and 100"
    }
    else{
        message.innerHTML = "Now you can play"
        return input;
    }
}

function colorsquare(){
    if(click){
    if(color == "Random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = 'black'
    }
}
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("divs")
    divs.forEach((div) => div.style.backgroundcolor = "white")
}