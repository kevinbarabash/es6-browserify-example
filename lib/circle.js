"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
};

var Point = _interopRequire(require("./point"));

var Circle = (function () {
    function Circle(center, radius) {
        this.center = center;
        this.radius = radius;
        this.velocity = new Point(2 * Math.random(), 2 * Math.random());
    }

    _prototypeProperties(Circle, null, {
        draw: {
            value: function draw(ctx) {
                var x = this.center.x;
                var y = this.center.y;
                var tau = 2 * Math.PI;

                ctx.beginPath();
                ctx.arc(x, y, this.radius, 0, tau, false);
                ctx.fill();
            },
            writable: true,
            enumerable: true,
            configurable: true
        },
        update: {
            value: function update() {
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
            },
            writable: true,
            enumerable: true,
            configurable: true
        }
    });

    return Circle;
})();

Circle.min_x = 0;
Circle.min_y = 0;
Circle.max_x = 512;
Circle.max_y = 512;

module.exports = Circle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFPLEtBQUssMkJBQU0sU0FBUzs7SUFFckIsTUFBTTtBQUVHLGFBRlQsTUFBTSxDQUVJLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDeEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNuRTs7eUJBTkMsTUFBTTtBQVFSLFlBQUk7bUJBQUEsY0FBQyxHQUFHLEVBQUU7b0JBQ0EsQ0FBQyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQXBCLENBQUM7b0JBQUUsQ0FBQyxHQUFLLElBQUksQ0FBQyxNQUFNLENBQWpCLENBQUM7QUFDVixvQkFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O0FBRXRCLG1CQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEIsbUJBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUMsbUJBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNkOzs7OztBQUVELGNBQU07bUJBQUEsa0JBQUc7QUFDTCxvQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDOUIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0Isd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjtBQUNELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDOUIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0Isd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjtBQUNELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDOUIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0Isd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjtBQUNELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDOUIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0Isd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjthQUNKOzs7Ozs7O1dBbkNDLE1BQU07OztBQXNDWixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7aUJBRUosTUFBTSIsImZpbGUiOiJjaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuY2xhc3MgQ2lyY2xlIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgUG9pbnQoMiAqIE1hdGgucmFuZG9tKCksIDIgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdmFyIHsgeCwgeSB9ID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIHZhciB0YXUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCB0aGlzLnJhZGl1cywgMCwgdGF1LCBmYWxzZSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jZW50ZXIuYWRkVG8odGhpcy52ZWxvY2l0eSk7XG4gICAgICAgIGlmICh0aGlzLmNlbnRlci54ID4gQ2lyY2xlLm1heF94KSB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ID0gQ2lyY2xlLm1heF94O1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNlbnRlci55ID4gQ2lyY2xlLm1heF95KSB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci55ID0gQ2lyY2xlLm1heF95O1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNlbnRlci54IDwgQ2lyY2xlLm1pbl94KSB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ID0gQ2lyY2xlLm1pbl94O1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNlbnRlci55IDwgQ2lyY2xlLm1pbl95KSB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci55ID0gQ2lyY2xlLm1pbl95O1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5DaXJjbGUubWluX3ggPSAwO1xuQ2lyY2xlLm1pbl95ID0gMDtcbkNpcmNsZS5tYXhfeCA9IDUxMjtcbkNpcmNsZS5tYXhfeSA9IDUxMjtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9