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



const amber =new Person({
    name: 'Amber',
    age: 28,
    location: 'California',
  });
  
  console.log(amber.name);
  console.log(amber.age);
  console.log(amber.location);
  console.log(amber.speak);
  
  const david =new Instructor({
    name: 'David',
    age:29,
    location:'California',
    specialty:'Welding',
    favLanguage:'JavaScript',
    catchPhrase:'Send it!',
  
  });
  
  console.log(david.specialty);
  console.log(david.favLanguage);
  console.log(david.catchPhrase);
  
  const wyatt= new Student({
    name:'Wyatt',
    age:25,
    location:'California',
    specialty:'Army',
    favLanguage:'Spanish',
    catchPhrase:'Epic!',
    previousBackground:'Navy',
    className:'Martial Arts',
    favSubjects:'Science',
  });
  
  console.log(wyatt.previousBackground);
  console.log(wyatt.className);
  console.log(wyatt.favSubjects);
  console.log(wyatt.sprintChallenge);
  
  const max = new ProjectManagers({
    name:'Max',
    age:23,
    location:'California',
    specialty:'Chaos',
    favLanguage:'gibberish',
    catchPhrase:'My party House',
    previousBackground:'chaos',
    className:'destruction',
    favSubjects:'Physical Education',
    gradClassName:'Web12',
    favInstructor:'Josh Knell',
  });
  console.log(max.gradClassName);
  console.log(max.favInstructor);