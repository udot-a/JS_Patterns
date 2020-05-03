class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `процесс создания программ`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `процесс тестирования`
    }
}

const dev = new Developer("Dron", 50000);
console.log(dev.work());

const tester = new Tester("Vika", 30000);
console.log(tester.work());
