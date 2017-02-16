/**Classroom*/
var Classroom = function (students,parents) {
    this.students = students || [];
    this.parents = parents || [];
};

Classroom.prototype.addStudent = function (student) {
    this.students.push(student);
};

Classroom.prototype.removeStudent = function (student) {
    removeFromArray(this.students,student);
};

/**People*/
var People = function (name, surname, gender, nat) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    var nationality = nat;

    this.getNationality = function () {
        return nationality;
    };

    this.setNationality = function (nat) {
        nationality = nat;
    };
};

People.prototype.changeNationality = function (nat) {
    this.setNationality(nat);
};

People.prototype.sayMyName = function () {
    if (this.gender === "male") {
        console.log("Mr." + this.name);
    } else if (this.gender === "female") {
        console.log("Mrs." + this.name);
    }
};

/**Student*/
var Student = function (name, surname, gender, nat, subjects) {
    People.apply(this, arguments);
    this.subjects = subjects || [];
};
Student.prototype = Object.create(People.prototype);
Student.prototype.addSubject = function (subject) {
    this.subjects.push(subject);
};

Student.prototype.removeSubject = function (subject) {
    removeFromArray(this.subjects,subject);
};

/**Parent*/
var Parent = function (name, surname, gender, nat, rigor) {
    People.apply(this, arguments);
    if (rigor > 10) {
        this.rigor = 10;
    } else if (rigor < 1) {
        this.rigor = 1;
    } else {
        this.rigor = rigor;
    }
};

Parent.prototype = Object.create(People.prototype);

/**Other*/
var removeFromArray = function (array,item) {
    var index = array.indexOf(item);
    array.splice(index, 1);
};

/**Test*/
var student_1 = new Student("student_1", "surname", "male", "nat", ["sub1","sub2"]);
var student_2 = new Student("student_2", "surname", "male", "nat", ["sub1","sub2","sub3"]);
var student_3 = new Student("student_3", "surname", "female", "nat", ["sub1","sub2"]);
var students = [student_1,student_2,student_3];

console.log(student_1);
student_1.sayMyName();
student_3.sayMyName();
console.log(student_2.subjects);
student_2.addSubject("sub4");
student_2.removeSubject("sub2");
console.log(student_2.subjects);
console.log(student_3.getNationality());
student_3.changeNationality("nat_2");
console.log(student_3.getNationality());

var parent_1 = new Parent("parent_1", "surname", "male", "nat", 15);
var parent_2 = new Parent("parent_2", "surname", "male", "nat", 4);
var parents = [parent_1,parent_2];

console.log(parent_1);
parent_1.sayMyName();

var classRoom = new Classroom([student_1,student_2],parents);
console.log(classRoom);
classRoom.addStudent(student_3);
classRoom.removeStudent(student_1);
console.log(classRoom.students);