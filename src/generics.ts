function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b']);
log(['a', 'b']);

// 泛型函数
// type Log = <T>(value: T) => T;
// let myLog: Log = log

// 泛型接口
interface Log<T> {
    (value: T): T
}
let myLog: Log<number> = log;