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
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('C');
let alternativeWay = (message as string).endsWith('C');

// arrow functions, they're both the same
let log = function(message) {
    console.log(message);
}

let doLog = (message) => console.log(message);
let doLog = () => console.log();

let doLog

log(message);
doSomething();