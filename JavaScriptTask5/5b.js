function Student(firstName, lastName, id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    
   
}
var student = new Student("Masha", "efrosinina", 2, [2,3,4,5,6]);

student.showAllinformation = function(){
    console.log(this.firstName, this.lastName);
    result = 0;
   
    this.grades.forEach(element => {
        result+=element;
    });

    average = result/this.grades.length;
    console.log(average);
};

student.showAllinformation();