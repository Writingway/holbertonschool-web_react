interface Directors extends Teacher {
  numberOfReports: number;
}

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

function printTeacher(firstName: string, lastName: string): string {
  const result = `${firstName[0]}. ${lastName}`;
  console.log(result);
  return result;
}

printTeacher("John", "Doe");


// Task 4
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// should print
// Object
// firstName: "John"
// lastName: "Doe"
// workOnHomework: function workOnHomework() { ... }
// displayName: function displayName() { ... }

const student1 = new StudentClass("John", "Doe");
console.log(student1);