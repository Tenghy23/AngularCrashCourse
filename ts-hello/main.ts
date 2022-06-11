import { LikeComponent } from "./like.component";

/*
function log(message) {
    console.log(message);
}

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    
    console.log('Finally: ' + i)
}

// var is scoped to immediate fuction body
var message = 'hello world';
// let is scoped to immediate enclosing block
let message2 = 'hello angular'

// type assertions
let message1;
message1 = 'abc';
let endsWithC = (<string>message).endsWith('C');
let alternativeWay = (message as string).endsWith('C');

// arrow functions, they're both the same
let doLog = function(message) {
    console.log(message);
}
let doLog1 = (message) => console.log(message);
let doLog2 = () => console.log();

log(message);
doLog(message);
doLog1(message);
doLog2();
doSomething();

// interfaces
interface Point {
    // with this interface, I'm defining the shape of the object
    // this represents function w 2 properties, & a function called
    // draw
    x: number,
    y: number,
    draw: () => void
}

class Point{
    constructor(private x?: number, privateS y?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
    
    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');

        this.x = value;
    }
}

let point = new Point(1,2);
point.X = 10;
point.draw();
*/

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)