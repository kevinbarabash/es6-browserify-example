"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    _prototypeProperties(Point, null, {
        distanceTo: {
            value: function distanceTo(otherPoint) {
                return this.subtract(otherPoint).length();
            },
            writable: true,
            enumerable: true,
            configurable: true
        },
        subtract: {
            value: function subtract(otherPoint) {
                return new Point(this.x - otherPoint.x, this.y - otherPoint.y);
            },
            writable: true,
            enumerable: true,
            configurable: true
        },
        length: {
            value: function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            writable: true,
            enumerable: true,
            configurable: true
        },
        addTo: {
            value: function addTo(otherPoint) {
                this.x += otherPoint.x;
                this.y += otherPoint.y;
            },
            writable: true,
            enumerable: true,
            configurable: true
        }
    });

    return Point;
})();

module.exports = Point;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTSxLQUFLO0FBQ0ssYUFEVixLQUFLLENBQ00sQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUNkLFlBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsWUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDZDs7eUJBSkMsS0FBSztBQU1QLGtCQUFVO21CQUFBLG9CQUFDLFVBQVUsRUFBRTtBQUNuQix1QkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdDOzs7OztBQUVELGdCQUFRO21CQUFBLGtCQUFDLFVBQVUsRUFBRTtBQUNqQix1QkFBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEU7Ozs7O0FBRUQsY0FBTTttQkFBQSxrQkFBRztBQUNMLHVCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEOzs7OztBQUVELGFBQUs7bUJBQUEsZUFBQyxVQUFVLEVBQUU7QUFDZCxvQkFBSSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDMUI7Ozs7Ozs7V0FyQkMsS0FBSzs7O2lCQXdCSSxLQUFLIiwiZmlsZSI6InBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yICh4LHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVRvKG90aGVyUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qob3RoZXJQb2ludCkubGVuZ3RoKCk7XG4gICAgfVxuICAgIFxuICAgIHN1YnRyYWN0KG90aGVyUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBvdGhlclBvaW50LngsIHRoaXMueSAtIG90aGVyUG9pbnQueSk7XG4gICAgfVxuICAgIFxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cbiAgICBcbiAgICBhZGRUbyhvdGhlclBvaW50KSB7XG4gICAgICAgIHRoaXMueCArPSBvdGhlclBvaW50Lng7XG4gICAgICAgIHRoaXMueSArPSBvdGhlclBvaW50Lnk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==