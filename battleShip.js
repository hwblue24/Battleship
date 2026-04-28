export class Ship {
    constructor(length, hitTotal, sunkStatus) {
        this.length = length; 
        this.hitTotal = hitTotal; 
        this.sunkStatus = sunkStatus; 
    }

    hit() {
        return this.hitTotal+=1
    }

    isSunk () {
        if(this.length === this.hitTotal) {
            this.sunkStatus = 'sunk'
            
        }
        return this.sunkStatus

    }

} 