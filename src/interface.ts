interface List {
    readonly id: number;
    name: string;
    // [x: string]: any,
    age?: number
};

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
    });
}

let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 12}
    ]
}

render(result)

// 如果直接传入对象，TS 会对对象中额外的属性进行检查
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// });
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// } as Result);
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// });

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string;
    // y: number
    // [z: number]: number; JavaScript 将 number 转为 string
    // 数字索引签名返回值的类型一定要是字符串返回的子类型
}


// let add: (x: number, y: number) => number;
type Add = (x: number, y: number) => number;
let add1: Add = (a, b) => a + b;

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => {};
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
lib1.version;