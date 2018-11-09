class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set fullName(name){
        let words = name.split(" "); 
        this.firstName = words[0] || " "; 
        this.lastName =words [1] || " ";
    }
}

class Student extends Person{
    constructor(firstName, lastName, id, grades){
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
        }
        get average(){
            return average(this);
        }
}

var student = new Student("Masha", "efrosinina", 2, [2,3,4,5,6]);

function average(student){
    result = 0;
    student.grades.forEach(element => {
        result+=element;
    });
    average = result/student.grades.length;
    return average;
}

console.log(student.average);
console.log(student.fullName);
student.fullName = "Kasha Pasha";
console.log(student.fullName);