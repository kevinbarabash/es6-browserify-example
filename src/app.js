import Point from "./point";
import Circle from "./circle";

var random = function(max) {
    return max * Math.random();  
};

var width = window.innerWidth;
var height = window.innerHeight;

Circle.max_x = width;
Circle.max_y = height;

var canvas = document.getElementById("canvas");
Object.assign(canvas, { width, height });
var ctx = canvas.getContext("2d");

var max_radius = 50;
var count = 100;
var circles = [];

for (var i = 0; i < count; i++) {
    var [x, y, radius] = [width, height, max_radius].map(random);
    circles.push(new Circle(new Point(x, y), radius));
}

ctx.fillStyle = "rgba(0,0,255,0.3)";
ctx.strokeStyle = "rgba(0,0,0,0.6)";
ctx.lineWidth = 1;

var drawLine = function(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
};

var drawScene = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < circles.length; i++) {
        for (let j = 0; j < i; j++) {
            let [c1, c2] = [circles[i], circles[j]];
            let min_dist = circles[i].radius + circles[j].radius;
            
            
            if (c1.center.distanceTo(c2.center) < min_dist) {
                drawLine(c1.center, c2.center);
            }
        }
    }

    for (let c of circles) {
        c.draw(ctx);
        c.update();
    }

    requestAnimationFrame(drawScene, canvas);
}

requestAnimationFrame(drawScene, canvas);
