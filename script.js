function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Do not change code below this line

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

window.Person = Person;
window.Employee = Employee;
