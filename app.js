
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let allBtns = document.querySelectorAll(".btn");

document.addEventListener("keydown", function () {

    if (started == false) {
        console.log("Game Started");

        started = true;
        levelUp();
    }

});

function gameFlash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp() {

    userSeq = [];

    level++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);

    let randColor = btns[randIdx];

    gameSeq.push(randColor);

    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);

}

function btnPress() {

    if (!started) return;

    let btn = this;

    userFlash(btn);

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {

        if (userSeq.length === gameSeq.length) {

            setTimeout(function () {
                levelUp();
            }, 1000);

        }

    } else {

        h2.innerHTML = `Game Over! Your Score: ${level}<br>Press any key to restart`;

        document.body.classList.add("game-over");

        setTimeout(function () {
            document.body.classList.remove("game-over");
        }, 300);

        resetGame();

    }

}

for (let btn of allBtns) {

    btn.addEventListener("click", btnPress);

}

function resetGame() {

    started = false;

    gameSeq = [];
    userSeq = [];

    level = 0;

}
