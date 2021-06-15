// function log<T>(value: T): T {
//     console.log(value);
//     return value;
// }

// log<string[]>(['a', 'b']);
// log(['a', 'b']);

// 泛型函数
// type Log = <T>(value: T) => T;
// let myLog: Log = log

// 泛型接口
// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log;

class Log<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}

let log1 = new Log<number>();
log1.run(1);
let log2 = new Log();
log2.run('1');

// 泛型约束
interface Length {
    length: number;
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

// log([1]);
// log('123');
// log({length: 1});
