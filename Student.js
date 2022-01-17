class Student{
    constructor(name,rollNo,age,grade){
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.grade = grade;
    }

    display(){
        console.log("My name is "+this.name +". I am "+ this.age +" years old.");
    }
}

