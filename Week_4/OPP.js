/*
In cases where you want to override some behaviors from a superclass (main class) for your subclass (class created under the structure of the main class), you can simply override it by (example) adding of changing the block of the property or method you want to override. The same way you can extend a superclass into a subclass (class mentor extends person), you can use 'super.'  to extend the given property with another property or method from the main superclass 
Example: (super.bio())
*/
// Super class
class Person {
    //Constructs default properties for the class (blueprint)
    constructor(name, quirkyFact) {
      this.name = name;
      this.quirkyFact = quirkyFact;
    }
    //Method in the superclass
    bio() {
      return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
  }
  
  //Subclass 'mentor' created using default properties from the main superclass 'Person' + its own properties
  class Mentor extends Person {

    // Mentor bios need to include a bit more info
    //Mentor's default bio property with addition to the values of the bio property of the main 'person' superclass
    bio() {
      return `I'm a mentor at Lighthouse Labs. ${super.bio()}`; 
    }
  }
  
  // DRIVER CODE

  class Student extends Person {
    bio() {
        return `I'm a student at Lighthouse Labs. ${super.bio()}`;
    }

  }
  
  const bob = new Mentor('Bob Ross', 'I like mountains way too much');
  const jose = new Student('Jose Eduardo', 'I like building computers way too much');
  console.log(jose.bio());
  console.log(bob.bio());
