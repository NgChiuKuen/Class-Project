class Knight {
    constructor(x, y, width, height, knightPos) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("knight.jpg");
        this.knightPosition = knightPos;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        traslate(pos.x, pos.y);
        imageMode(CENTER);
        this.image(this.image, 0, this.boatPosition, this.width, this.height);
        pop();
    }

}