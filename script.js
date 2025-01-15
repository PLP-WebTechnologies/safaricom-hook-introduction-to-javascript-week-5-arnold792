// Part 1: JavaScript Basics
// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "traveling"];
const person = { firstName: "Jane", lastName: "Smith", occupation: "Engineer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation. Please choose +, -, *, or /.");
      return;
  }
  alert(`Result: ${result}`);
}
// Uncomment to test the calculator function
// calculator();

// Functions: Greeting Message
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript Assignment.`;
}
const greetingMessage = greetUser("Arnold");
document.getElementById("greeting-message").textContent = greetingMessage;

// Part 2: JavaScript Control Structures
// If Statements: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
if (!isNaN(userAge)) {
  const votingMessage =
    userAge >= 18
      ? "You are eligible to vote."
      : "You are not eligible to vote.";
  document.getElementById("voting-eligibility").textContent = votingMessage;
}

// Loops: Display Numbers 1 to 10
const numberListDiv = document.getElementById("number-list");
const ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  ol.appendChild(li);
}
numberListDiv.appendChild(ol);

// Part 3: Introduction to the DOM
// Selecting and Modifying HTML Elements
// Change the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add new content dynamically
const dynamicContentDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
