export class Ship {
    constructor(length, hits) {
        this.length = length; 
        this.hits = hits; 
    }

    hit() {
        this.hits+=1
    }

    isSunk () {
        if(this.length === this.hits) {
            return true 
        }else {
            return false 
        }

    }

} 

export class GameBoard {
    
    shipLocations = {};
    missedShots = [];

    placeShips(coordinate, length, hits) {

        let key = coordinate;
        let value = new Ship (length, hits)
        this.shipLocations[key] = value; 
    }

    receiveAttack(coordinate, ) {
        if(this.shipLocations[coordinate] === undefined) {
            this.missedShots.push(coordinate)
        }else {
            let attackedShip = this.shipLocations[coordinate]; 
            attackedShip.hit();
        }
    }

    areAllShipsSunk () {
        for (const key in this.shipLocations) {
            let ship = this.shipLocations[key]
            if(ship.isSunk()=== false) {
                return false 
            }
        }
        return true 

    }

}


export class Player {
    constructor(playerType){
        this.playerType = playerType;
        this.gameBoard = new GameBoard();
    }

}

