class ClassA {
    constructor() {
        this.propA = 'A';
    }

    methodA() {
        return this.propA;
    }
}

class ClassB extends ClassA {
    constructor() {
        super();
        this.propB = 'B';
    }

    methodA() {
        return 'NEW B';
    }

    methodB() {
        return this.propB + this.methodA();
    }
}

class ClassC extends ClassB {
    constructor() {
        super();
        this.propC = 'C';
         this.testProp = 1;
    }

    methodC() {
        return this.propC + super.methodB();
    }
}