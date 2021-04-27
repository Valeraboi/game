const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let hero = new Image();
hero.src = "assets/img/eric.png";
let bg = new Image();
bg.src = "assets/img/background.jpg";

function game(){
    ctx.drawImage(bg, 0, 0, 500, 500);
    ctx.drawImage(hero, 0, 0, 30, 30);

}
game();
