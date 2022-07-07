var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name));
    };
    return Human;
}());
var hitoe = new Human('hitoe', 22);
hitoe.greet();
try {
    var a = [];
    console.log(a[0]);
}
catch (e) {
    console.log(e);
}
finally {
    console.log('Anyway, have fun!');
}
