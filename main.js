// strategy pattern
// make the mistake of making a display strategy
var Duck = /** @class */ (function () {
    function Duck(flyBehaviour, quackBehaviour, swimBehaviour) {
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
        this.swimBehaviour = swimBehaviour;
    }
    Duck.prototype.display = function () {
        console.log("just a regular duck");
    };
    Duck.prototype.fly = function () {
        this.flyBehaviour.fly();
    };
    Duck.prototype.quack = function () {
        this.quackBehaviour.quack();
    };
    Duck.prototype.swim = function () {
        this.swimBehaviour.swim();
    };
    return Duck;
}());
var RegularFly = /** @class */ (function () {
    function RegularFly() {
    }
    RegularFly.prototype.fly = function () {
        console.log("RegularFly");
    };
    return RegularFly;
}());
var HoveringFly = /** @class */ (function () {
    function HoveringFly() {
    }
    HoveringFly.prototype.fly = function () {
        console.log("HoveringFly");
    };
    return HoveringFly;
}());
var NoFly = /** @class */ (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        console.log("NoFly");
    };
    return NoFly;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log("MuteQuack");
    };
    return MuteQuack;
}());
var RegularQuack = /** @class */ (function () {
    function RegularQuack() {
    }
    RegularQuack.prototype.quack = function () {
        console.log("RegularQuack");
    };
    return RegularQuack;
}());
var FloatSwim = /** @class */ (function () {
    function FloatSwim() {
    }
    FloatSwim.prototype.swim = function () {
        console.log("FloatSwim");
    };
    return FloatSwim;
}());
var RegularSwim = /** @class */ (function () {
    function RegularSwim() {
    }
    RegularSwim.prototype.swim = function () {
        console.log("RegularSwim");
    };
    return RegularSwim;
}());
var myDuck = new Duck(new RegularFly(), new RegularQuack(), new RegularSwim());
myDuck.display();
myDuck.fly();
myDuck.quack();
myDuck.swim();
