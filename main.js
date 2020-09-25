// strategy pattern
// make the mistake of making a display strategy
// git checkout also can move you to a Specific commit

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super.call(this, new NoFly(), new Squack(), new FloatSwim()) || this;
    }
    RubberDuck.prototype.display = function () {
        console.log("just a rubber duck");
    };
    return RubberDuck;
}(Duck));
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
var Squack = /** @class */ (function () {
    function Squack() {
    }
    Squack.prototype.quack = function () {
        console.log("squack");
    };
    return Squack;
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
var myRubberDuck = new RubberDuck();
myRubberDuck.display();
myRubberDuck.fly();
myRubberDuck.quack();
myRubberDuck.swim();
