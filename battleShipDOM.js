import {GameBoard, Ship, Player} from "./battleShip.js" 

//connect play button to creating two players using player object 

let human; 
let computer;

const btn = document.getElementById('playBtn'); 
btn.addEventListener("click", function () {
    human = new Player ('human');
    computer = new Player ('computer');

    //pre-determined coordinates for players between A-E and 1-5
    human.gameBoard.placeShips('A1',1,0)
    human.gameBoard.placeShips('C3',1,0)
    human.gameBoard.placeShips('E5',1,0)

    computer.gameBoard.placeShips('D1',1,0)
    computer.gameBoard.placeShips('B3',1,0)
    computer.gameBoard.placeShips('C4',1,0)

    console.log(human.gameBoard.shipLocations)
    console.log(computer)
    
})

//render using DOM 5x5 grid 


document.addEventListener("DOMContentLoaded", ()=> {
    const parentHuman = document.querySelector("#humanBoardContainer");
    let columns = ["A","B","C","D","E"]; 
    for (let i=5;i>=1;i--) {
        for(const letters of columns) {
            const div = document.createElement("div");
            div.setAttribute('class',`humanBoard`)
            div.setAttribute("coordinate", letters+i)
            parentHuman.appendChild(div)

        }
    }

    const parentComputer = document.querySelector("#computerBoardContainer");
    for (let i=5;i>=1;i--) {
        for(const letters of columns) {
            const div = document.createElement("div");
            div.setAttribute('class',`computerBoard`)
            div.setAttribute("coordinate", letters+i)
            parentComputer.appendChild(div)

        }
    }


})

