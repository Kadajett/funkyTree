function Branch(start, end) {
    this.begin = start;
    this.end = end;
    this.angle = PI/4;

    this.show = function () {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);

    }

    

    this.jitter = function (amp) {

        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate( map(amp, 0, 1, -angle / 2, angle / 2))
        this.end = dir

        console.log(this.end);
    }

    this.branchA = function () {

        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(this.angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);

        var right = new Branch(this.end, newEnd);

        return right;

    }
    this.branchB = function () {

        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-this.angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);

        var right = new Branch(this.end, newEnd);

        return right;

    }
}