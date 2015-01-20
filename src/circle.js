import Point from "./point";

class Circle {
    
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
        this.velocity = new Point(2 * Math.random(), 2 * Math.random());
    }
    
    draw(ctx) {
        var { x, y } = this.center;
        var tau = 2 * Math.PI;
        
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, tau, false);
        ctx.fill();
    }
    
    update() {
        this.center.addTo(this.velocity);
        if (this.center.x > Circle.max_x) {
            this.center.x = Circle.max_x;
            this.velocity.x *= -1;
        }
        if (this.center.y > Circle.max_y) {
            this.center.y = Circle.max_y;
            this.velocity.y *= -1;
        }
        if (this.center.x < Circle.min_x) {
            this.center.x = Circle.min_x;
            this.velocity.x *= -1;
        }
        if (this.center.y < Circle.min_y) {
            this.center.y = Circle.min_y;
            this.velocity.y *= -1;
        }
    }
}

Circle.min_x = 0;
Circle.min_y = 0;
Circle.max_x = 512;
Circle.max_y = 512;

export default Circle;
