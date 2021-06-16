/**
 * 类型保护
 * 保证在代码块中，准确推测类型
 */
enum Type { Strong, Week };

class Java {
    helloJava() {
        console.log('Hello Java');
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript');
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();

    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }

    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // in
    // if ('java' in lang) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // typeof
    // if (typeof x === 'string') {
    //     x.length;
    // } else {
    //     x.toFixed;
    // }

    return lang;
}

getLanguage(Type.Strong, 1);