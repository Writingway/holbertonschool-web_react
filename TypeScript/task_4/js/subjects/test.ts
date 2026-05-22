/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="React.ts" />
/// <reference path="Java.ts" />

const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5,
  experienceTeachingReact: 3,
  experienceTeachingJava: 0
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());