var cp="0";
var count=0;
let c1=document.getElementById("cell1");
let c2=document.getElementById("cell2");
let c3=document.getElementById("cell3");
let c4=document.getElementById("cell4");
let c5=document.getElementById("cell5");
let c6=document.getElementById("cell6");
let c7=document.getElementById("cell7");
let c8=document.getElementById("cell8");
let c9=document.getElementById("cell9");
function cell1(){
    let c=document.getElementById("cell1");
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}

function cell2(){
    let c=document.getElementById('cell2');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
    
}
function cell3(){
    let c=document.getElementById('cell3');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}
function cell4(){
    let c=document.getElementById('cell4');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}
function cell5(){
    let c=document.getElementById('cell5');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}
function cell6(){
    let c=document.getElementById('cell6');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}
function cell7(){
    let c=document.getElementById('cell7');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
    
}
function cell8(){
    let c=document.getElementById('cell8');
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
}
function cell9(){
    let c=document.getElementById('cell9');
   
    if (c.innerHTML === "") {
        c.innerHTML = cp; // Mark the current player's symbol
        c.onclick = null; // Disable the click event for the clicked cell
        count++;
        checkwin(); // Check for a winner
        cp = (cp === "x") ? "0" : "x"; // Switch player after the move
    }
}
function checkwin (){
    if(c1.innerHTML==cp && c2.innerHTML==cp && c3.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if(c4.innerHTML==cp && c5.innerHTML==cp && c6.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if(c7.innerHTML==cp && c8.innerHTML==cp && c9.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if(c1.innerHTML==cp && c4.innerHTML==cp && c7.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }

    else if(c2.innerHTML==cp && c5.innerHTML==cp && c8.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if(c3.innerHTML==cp && c6.innerHTML==cp && c9.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if(c1.innerHTML==cp && c5.innerHTML==cp && c9.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else if (c3.innerHTML==cp && c5.innerHTML==cp && c7.innerHTML==cp){
        let r=document.getElementById("result");
        r.innerHTML=cp+"iswinner";
        disableBoard();
    }
    else{
        if (count === 9) {
            let r = document.getElementById("result");
            r.innerHTML = "It's a draw!";
            disableBoard(); // Disable further moves
        }
    }
    }

function disableBoard() {
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById("cell" + i);
        cell.onclick = null;
    }
}
function doubleClick(){
    if(c.innerHTML==" "){
        c=cp;
    }

}
function restart(){
    window.location="index.html";
}