let obj11 = {
    a: 1,
    b: 2, 
    c: 3
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}

console.log(getValues(obj11, ['a', 'b']));
// console.log(getValues(obj11, ['e', 'f']));

// keyof T
interface Obj1 {
    a: number,
    b: string
}
let key: keyof Obj1

// T[K] 制定 Obj1 的属性 a 的值的类型
let value: Obj1['a']

// T extends U