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

    console.log(human)
    console.log(computer)
    
})






