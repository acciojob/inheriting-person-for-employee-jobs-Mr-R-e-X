// person_employee.js

// Person Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee Constructor Function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor with this context
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Expose constructors to the window object for Cypress
window.Person = Person;
window.Employee = Employee;
