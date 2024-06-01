class ClassA{
    static typeName: string;

    constructor (protected wheelCount: number) {}

    static getFullName() {
        return "ClassA " + ClassA.typeName;
    }
}

const a  = new ClassA(1);
console.log(ClassA.typeName);

