class Superclass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }

    sayHello() {
        console.log('Olá mundo')
    }
}

class Subclass extends Superclass {

}

function myFunc(classe: Superclass) {
    classe.sayHello()
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1);
myFunc(obj2);

interface myInterface {
    myNumber: number;
    
    myFunc(myParam: number): string;
}

class Myclass implements myInterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number) {
        return (this.myNumber + myParam).toString()
    }
}

const myObj = new Myclass(3)

console.log(myObj.myFunc(4))
console.log(myObj.myNumber)