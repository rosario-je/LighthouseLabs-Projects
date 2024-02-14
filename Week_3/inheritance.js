class person {
    
    constructor(name, age){
        this.name =  name;
        this.age = age;
    }

    bio (){
        return `My name is ${this.name} and I am ${this.age} years old`
    }
}

class student extends person {
    
    enroll(cohort){
        this.cohort = cohort;
    }
}

class mentor extends person {
    
    goOnShift(){
        this.goOnShift = true;
    }

    goOffShift(){
        this.goOffShift = false;
    }
}

const student1 = new student('Jose', 22)
student1.enroll('Lighthouse Labs')
console.log(student1);