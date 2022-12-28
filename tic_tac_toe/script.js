console.log("welcome to the battle")
let bg_music = new Audio("game_bg_music.mp3");
let audioturn = new Audio("ding.mp3");
let game_over = new Audio("game_over.mp3");
let isgameover = false;

let turn = "X";

//function to change turn

const changeturn = ()=>{
    return turn === "X"?"0": "X"
}

//function to check for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            bg_music.pause();
            game_over.play();
        }
    })
}


//Game logic
bg_music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkWin();
            if(isgameover!=true){
                document.getElementsByClassName("info")[0].innerText = "Turn for bro: " + turn;
            }
        }
    })
})

//reset ka kaam
function refresh(){
    window.location.reload("Refresh")
  }

function mute(){
    bg_music.pause();
}
function unmute(){
    bg_music.play();
}