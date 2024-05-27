// Person Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old.`; // Changed to return
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
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`; // Changed to return
};


// Example usage
const person = new Person("Alice", 25);
console.log(person.greet()); // Expected output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
console.log(employee.jobGreet()); // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
