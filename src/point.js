class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(otherPoint) {
        return this.subtract(otherPoint).length();
    }
    
    subtract(otherPoint) {
        return new Point(this.x - otherPoint.x, this.y - otherPoint.y);
    }
    
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    addTo(otherPoint) {
        this.x += otherPoint.x;
        this.y += otherPoint.y;
    }
}

export default Point;
