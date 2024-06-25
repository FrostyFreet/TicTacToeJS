const buttons=document.getElementsByClassName('grid-item')
const start=document.getElementById('start')
const random=Math.floor(Math.random()*2);
const h1=document.getElementById("header")
const restart=document.getElementById('restart')
let p1=true
let p1Symbol=random==1?"X":"0"
let p2Symbol=random==1?"0":"X"
let game=false

function checkWin(playerSymbol) {
    if(buttons[0].innerText===playerSymbol&&buttons[1].innerText===playerSymbol&&buttons[2].innerText===playerSymbol){return true}
    if(buttons[3].innerText===playerSymbol&&buttons[4].innerText===playerSymbol&&buttons[5].innerText===playerSymbol){return true}
    if(buttons[6].innerText===playerSymbol&&buttons[7].innerText===playerSymbol&&buttons[8].innerText===playerSymbol){return true}
    if(buttons[0].innerText===playerSymbol&&buttons[4].innerText===playerSymbol&&buttons[8].innerText===playerSymbol){return true}
    if(buttons[2].innerText===playerSymbol&&buttons[4].innerText===playerSymbol&&buttons[6].innerText===playerSymbol){return true}
    if(buttons[0].innerText===playerSymbol&&buttons[3].innerText===playerSymbol&&buttons[6].innerText===playerSymbol){return true}
    if(buttons[1].innerText===playerSymbol&&buttons[4].innerText===playerSymbol&&buttons[7].innerText===playerSymbol){return true}
    if(buttons[2].innerText===playerSymbol&&buttons[5].innerText===playerSymbol&&buttons[8].innerText===playerSymbol){return true}
}
function checkTie(playerSymbol){
    return Array.from(buttons).every(button => button.innerText === "X" || button.innerText === "0");
}

start.addEventListener('click',()=>{
    game=true
    if(game){
        h1.innerText=`Game Started ${p1Symbol}'s turn`
        for(let i=0;i<buttons.length;i++) {
            buttons[i].addEventListener('click', () => {
                if (p1) {
                    buttons[i].innerText = p1Symbol
                    p1 = false
                    h1.innerText=`${p2Symbol}'s turn`
                    if(checkWin(p1Symbol)){
                        h1.innerText="P1 WON! Congratulations!"
                        game=false
                        Array.from(buttons).every(button=>button.disabled=true)
                    }
                    else if(checkTie()){
                        h1.innerText="It's a TIE"
                        Array.from(buttons).every(button=>button.disabled=true)
                        game=false
                    }
                }
                else{
                    h1.innerText=`${p1Symbol}'s turn`
                    buttons[i].innerText = p2Symbol
                    p1 = true
                    if(checkWin(p2Symbol)){
                        h1.innerText="P2 WON! Congratulations!"
                        game=false
                        Array.from(buttons).every(button=>button.disabled=true)
                    }
                    else if(checkTie()){
                        h1.innerText="It's a TIE"
                        Array.from(buttons).every(button=>button.disabled=true)
                        game=false
                    }
                }
                buttons[i].disabled=true
            })
        }
    }
    start.disabled=true
})
restart.addEventListener('click',()=>{
    h1.innerText='Welcome To Tic-Tac-Toe'
    for(let i=0;i<buttons.length;i++){
        buttons[i].innerText=""
        buttons[i].disabled=false
    }
    game=true
})








