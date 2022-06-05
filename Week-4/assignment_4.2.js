class Person {
    constructor(name) {
        this.name = name;
    }
}
const teacher = new Person("Chandan");
Person.prototype.teach = (subject) => {
    return teacher.name + `is now teaching ${subject}`
}
console.log(teacher.teach("Math"));

