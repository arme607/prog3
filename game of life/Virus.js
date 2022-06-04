class Virus{
    constructor(x, y) {
      super(x,y)
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char1, char2, char3) {
      this.getNewCordinates();
      return super.chooseCell(character);
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 11) {
            let x = exact[0];
            let y = exact[1];

            let virus = new Virus(x, y);
            matrix[y][x] = 5;
            virusArr.push(virus);

            this.energy = 10;
        }
        else{
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    infect(){
        let found = this.chooseCell(2,3,4)
        let exact = random(found)
        if (exact) {
            let x = exact[0]
            let y = exact[1]
            matrix[y][x] = 6
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;
            this.energy-=2

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
        

            
        }
        die(){
            for (let i = 0; i < virusArr.length; i++) {
                if( virusArr[i].x == this.x && virusArr[i].y == this.y ){
                    virusArr.splice(i, 1)
                }
            }
            matrix[this.y][this.x] = 0
        }
    }
