/*
	jon darling
    MMP-310
    wekk-8
    Objects v-1
    
 */

var spaceship = {

    x: 200,
    y: 200,
    size: 50,
    speed: 20,
    


    //    display: function () {
    //        fill('blue');
    //         triangle(
    //        this.x, this.y,
    //        this.x - this.size, this.y + this.size * 2,
    //        this.x + this.size, this.y + this.size * 2);

    display: function () {
         
        fill('#DE9151');
        
        ellipse(this.x, this.y + 100, this.size);//flames
     
        
//        ellipse(this.x, this.y + 100, this.size);
           fill('gold');
        ellipse(this.x, this.y / 2, this.size / 2);
        fill('#BBB5BD');
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size * 2,
            this.x + this.size, this.y + this.size * 2);
        
        fill('black');
        ellipse(this.x, this.y +50, this.size / 2, 10);



    },

      //move spaceship
    update: function () {
        
       

        if (keyIsDown(RIGHT_ARROW)) {
            spaceship.x += spaceship.speed;
        }

        if (keyIsDown(LEFT_ARROW)) {

            spaceship.x -= spaceship.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            spaceship.y += spaceship.speed;
        }

        if (keyIsDown(UP_ARROW)) {

            spaceship.y -= spaceship.speed;
        }

    }
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(51);



    //draw spaceship

    spaceship.display();
    spaceship.update();









} //end draw