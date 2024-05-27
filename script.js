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
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example Test Case

// Create an instance of the Person class
const person = new Person("Alice", 25);
person.greet(); // Expected output: Hello, my name is Alice, I am 25 years old.

// Create an instance of the Employee class
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
