// strategy pattern
// make the mistake of making a display strategy

class Duck {    
    constructor(private flyBehaviour: FlyStrategy,
        private quackBehaviour: QuackStrategy,
        private swimBehaviour: SwimStrategy) {}

    display(): void {
        console.log("just a regular duck");
    }

    fly(): void {
        this.flyBehaviour.fly();
    }

    quack(): void {
        this.quackBehaviour.quack();
    }

    swim(): void {
        this.swimBehaviour.swim();
    }
}

interface FlyStrategy {
    fly(): void;
}

interface QuackStrategy {
    quack(): void;
}

interface SwimStrategy {
    swim(): void;
}

class RegularFly implements FlyStrategy {
    fly(): void {
        console.log("RegularFly");
    }
}

class HoveringFly implements FlyStrategy {
    fly(): void {
        console.log("HoveringFly");
    }
}

class NoFly implements FlyStrategy {
    fly(): void {
        console.log("NoFly");
    }
}

class MuteQuack implements QuackStrategy {
    quack(): void {
        console.log("MuteQuack");
    }
}

class RegularQuack implements QuackStrategy {
    quack(): void {
        console.log("RegularQuack");
    }
}

class FloatSwim implements SwimStrategy {
    swim(): void {
        console.log("FloatSwim");
    }
}

class RegularSwim implements SwimStrategy {
    swim(): void {
        console.log("RegularSwim");
    }
}

let myDuck: Duck = new Duck(
    new RegularFly(),
    new RegularQuack(),
    new RegularSwim()
);

myDuck.display();
myDuck.fly();
myDuck.quack()
myDuck.swim();
