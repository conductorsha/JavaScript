var student = {
    compulsorySubject: ["Math", "English", "Java"]
}

function createObjects(name, surname, id, compulsorySubject){
    var student1 = Object.create(student);
    student1.name = name;
    student1.surname = surname;
    student1.id = id;
    student1.compulsorySubject = compulsorySubject;
    return student1;
}

var studak = createObjects("Taras", "Buchynskyi", 2, ["ukrainian", "spanish"]);

console.log(studak.compulsorySubject);