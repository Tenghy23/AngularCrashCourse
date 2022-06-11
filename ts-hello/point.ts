export class Point{
    constructor(private x?: number, privateS y?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
}