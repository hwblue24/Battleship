import {GameBoard, Ship, Player, GameFlowController} from "./battleShip.js" 

//------------------------------------------
//APP startup logic 
let gameFlowController = new GameFlowController; 
let gameStarted = false;

//pre-determined coordinates for players between A-E and 1-5
gameFlowController.human.gameBoard.placeShips('A1',1,0)
gameFlowController.human.gameBoard.placeShips('C3',1,0)
gameFlowController.human.gameBoard.placeShips('E5',1,0)

gameFlowController.computer.gameBoard.placeShips('D1',1,0)
gameFlowController.computer.gameBoard.placeShips('B3',1,0)
gameFlowController.computer.gameBoard.placeShips('C4',1,0)

//-------------------------------------------


//-------------------------------------------
//DOM rendering 
//-------------------------------------------
//on page load and board rendered
document.addEventListener("DOMContentLoaded", ()=> {
    const parentHuman = document.querySelector("#humanBoardContainer");
    let columns = ["A","B","C","D","E"]; 
    for (let i=5;i>=1;i--) {
        for(const letters of columns) {
            let coordinate = (letters+i)
            const div = document.createElement("div");
            div.setAttribute('class',`humanBoard`)
            div.setAttribute("coordinate", coordinate)
            div.textContent = coordinate
            parentHuman.appendChild(div)

        }
    }

    const parentComputer = document.querySelector("#computerBoardContainer");
    for (let i=5;i>=1;i--) {
        for(const letters of columns) {
            let coordinate = (letters+i)
            const div = document.createElement("div");
            div.setAttribute('class',`computerBoard`)
            div.setAttribute("coordinate", coordinate)
            div.textContent = coordinate
            parentComputer.appendChild(div)

        }
    }

})

//places ships on grid represented as filled in color starts rounds

const btn = document.getElementById('playBtn'); 
btn.addEventListener("click", function () {
    let humanShipLocations = gameFlowController.human.gameBoard.shipLocations
    for(const key in humanShipLocations) {
        let div = document.querySelectorAll('.humanBoard');
        div.forEach((div) => {
            if(div.getAttribute('coordinate') === key) {
                div.style.backgroundColor = "grey";
            }
        })

    }

    //reveals ship locations for computer - hide later
    let computerShipLocations = gameFlowController.computer.gameBoard.shipLocations;
    for(const key in computerShipLocations) {
        let div = document.querySelectorAll('.computerBoard');
        div.forEach((div) => {
            if(div.getAttribute('coordinate') === key) {
                div.style.backgroundColor = "grey";
            }
        })

    }

    enableBoardClick();
    gameStarted = true; 
    
})

// enables clicking pc board 
function enableBoardClick() {
    const container = document.getElementById("computerBoardContainer");
    container.addEventListener("click", function (e) {
        let coordinate = e.target.getAttribute('coordinate');
        let hitStatus = gameFlowController.computer.gameBoard.receiveAttack(coordinate); 
        if(hitStatus === true) {
            e.target.textContent = 'X'
        }else {
            e.target.textContent = "M"
        }
      
    })
}





