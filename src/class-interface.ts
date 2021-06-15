interface Human {
    name: string;
    eat(): void;
}
// 类继承接口
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {};
}

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}
// 接口继承接口
interface Boy extends Man, Child {}

let boy: Boy = {
    run () {},
    name: '',
    eat() {},
    cry() {}
}

class Auto {
    state = 1
    // private state2 = 0
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 1
    private state2 = 0
}

class Bus extends Auto implements AutoInterface {

}