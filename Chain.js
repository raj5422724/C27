class Chain {
    constructor(BodyA,BodyB) {
        var options = {
            bodyA: BodyA,
            bodyB: BodyB,
            length: 250,
            stiffness: 0.7
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display() {
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}