function Student(firstName, lastName, id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    
   
}
var student = new Student("Masha", "efrosinina", 2, [2,3,4,5,6]);

student.showAllinformation = function(){
    console.log(this.firstName, this.lastName);
   
    console.log(average(this));
};

function average(student){
    result = 0;
    student.grades.forEach(element => {
        result+=element;
    });

    average = result/student.grades.length;
    return average;
}

Object.defineProperty(student, 'average', {
    get: function(){return average(this);}
});
Object.defineProperty(student, 'fullName',{
    get: function(){return this.firstName + " " + this.lastName},
    set: function(name){let words = name.split(" "); 
                        this.firstName = words[0] || " "; 
                        this.lastName =words [1] || " ";}
})
console.log(student.average);
console.log(student.fullName);
student.fullName = "Kasha Pasha";
console.log(student.fullName);