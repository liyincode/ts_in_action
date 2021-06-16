// 交叉类型
interface DogInterface {
    run(): void;
}

interface CatInterface {
    jump(): void;
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 联合类型
let aa1: number | string = 1;
let bb1: 'a' | 'b' | 'c';
let cc1: 1 | 2 | 3;

class Dog implements DogInterface {
    run() {};
    eat() {};
}

class Cat implements CatInterface {
    jump() {};
    eat() {};
}
enum Master {Boy, Girl};
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    // pet.run();
    return pet;
}

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    r: number
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape): number {
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width; 
        case "circle":
            return Math.PI * s.r * s.r;
        default:
            return ((e: never) => { throw new Error(e)})(s);
    }
}

console.log(area({kind: 'circle', r: 1}))