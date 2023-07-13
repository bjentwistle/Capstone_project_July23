

class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame")  
    }

    preload(){

    }
    create() {
        this.config = this.sys.game.config
        this.background = this.add.image(0,0, "gutsy");
        //this.background.angle = 90; //can rotate it for different aspects.
        this.background = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "gutsy");
        //this.background.setOrigin(0, 0);
        
        this.background.setScale(2);

        this.add.text(20, 20, "Game play!", {fontSize: "26pt"});

        // this.blueVirus.setScale(1);
        this.blueVirus = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, "blueVirus");
        this.rbcell = this.add.sprite(this.config.height / 2, this.config.width / 2, "rbcell");
        this.blueVirus.flipX = true;

        const scale = .1;
        this.rbcell.setScale(scale)//shrinks size of image

        


        // let maxObjects = 15;//max num we want created
        // for (let i = 0; i <= maxObjects; i++) {
        //     this.rbcell = this.physics.add.sprite(16, 16, "rbcell");
        //     this.rbcell.add(cell);
        //     cell.setRandomPosition(0, 0, this.game.config.width, this.game.config.height);
        // }

        const numCells = 15; // Number of cell images you want to create
        const cellSpacing = 100; // Spacing between each cell image

        for (let i = 0; i < numCells; i++) {
            const xPos = (i + 1) * cellSpacing; // Calculate the x-position for each cell image
            const yPos = this.config.height / 2; // Set the y-position of the cell image

            const rbcell = this.add.sprite(xPos, yPos, 'rbcell');

            // Set the desired scale or display size for each cell image
            const scale = 0.1; // Set the scale value as per your requirement
            rbcell.setScale(scale);
            // Alternatively, you can use setDisplaySize to specify width and height directly:
            // rbcell.setDisplaySize(width, height)
        }
        // this.rbcell = this.physics.add.group(); //group for the cell


        this.anims.create({
            key: "blueVirus_anim",
            frames: this.anims.generateFrameNumbers("blueVirus",{ start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
        });

        

        //play the animations
        this.blueVirus.play("blueVirus_anim");
        // this.rbcell.play("rbcell");
    }


    update(){
        // to call a function to move the cells vertically
        this.moveCell(this.blueVirus, 1);
        this.moveCell(this.rbcell, 1);
        // this.moveCell(this.cell2, 1.5);
        // this.moveCell(this.cell3, 2);


    //to scroll the background image
    this.background.tilePositionY += 0.5;

    }

    // create the function to move the ships
    moveCell(cell, speed) {
    
        // increase the position of the cell on the vertical axis
        cell.y += speed;
        // if the cell hits the bottom of the screen call the reset function
        if (cell.y > window.innerHeight) {
        //call a reset position function
        this.resetCellPos(cell);
        }
    }

    //create the reset position function
    resetCellPos(cell){
      // put the cell on the top of the window.
    cell.y = 0;
      // put the cell on a random position on the x axis
    const randomX = Phaser.Math.Between(0, window.innerWidth);
    cell.x = randomX;
    }

}//end bracket

export default Scene2