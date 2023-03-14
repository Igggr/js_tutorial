/// @ts-ignore
let obj = new Correct1();
let obj2 = new obj.constructor();


function Correct1() { };

function Correct2() { };
Correct2.prototype = {
    constructor: Correct2,
};

function Incorrect() { };
Incorrect.prototype = {};