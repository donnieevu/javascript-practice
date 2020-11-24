class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Animal {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOOWW!'
    }
}

class Dog extends Animal {
    bark() {
        return 'WOOF!'
    }
}