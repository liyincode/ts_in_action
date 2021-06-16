abstract class Animal {
    // 抽象类，只能被继承，不能实例化
    eat() {
        console.log('eat');
    }
    abstract sleep(): void;
}
// class Dog extends Animal{
//     constructor(name: string) {
//         super();
//         this.name = name;
//     }

//     name: string;
//     readonly legs: number = 4;
//     run() {}
//     private pri() {}
//     protected pro() {}
//     static food: string = 'bones';
//     sleep() {
//         console.log("dog is sleeping");
//     }
// }

// console.log(Dog.prototype);
// let dog = new Dog('wangwang');
// console.log(dog);
// dog.pro();
// console.log(Dog.food);


// 继承
// class Husky extends Dog{
//     constructor(name: string, public color: string) {
//        super(name); 
//        this.color = color;
//        this.pro();
//     }
// }
// console.log(Husky.prototype);

// let husky = new Husky('chun', 'white');
// console.log(husky);
// console.log(Husky.food);


// class Cat extends Animal {
//     sleep() {
//         // console.log('cat is sleeping');
//     }
// }

// let cat = new Cat();
// 多态
// let animals: Animal[] = [dog, cat];
// animals.forEach(item => {
//     // item.sleep();
// });

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().step2();