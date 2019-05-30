// CODE here for your Lambda Classes
class Person{
    constructor(attribute){
        this.name=attribute.name;
        this.age=attribute.age;
        this.location=attribute.location;
    }
speak(){
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
}
}

class Instructor extends Person{
    constructor(attribute){
        super(attribute);
        this.specialty=attribute.specialty;
        this.favLanguage=attribute.favLanguage;
        this.catchPhrase=attribute.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade({student},subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attribute){
        super(attribute);
        this.previousBackground=attribute.previousBackground;
        this.className=attribute.className;
        this.favSubjects=attribute.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor{
    constructor(attribute){
        super(attribute);
        this.gradClassName=attribute.gradClassName;
        this.favInstructor=attribute.favInstructor;
    }
    standUp(name,channel){
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode({student},subject){
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}