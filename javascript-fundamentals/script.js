// ====================
// 🎯 PART 1: Variables, Data Types & Conditionals
// ====================
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = document.getElementById("ageInput").value; // variable & user input
  age = Number(age);

  // Conditional logic
  if (age >= 18) {
    ageResult.textContent = "✅ You are an adult!";
  } else if (age > 0) {
    ageResult.textContent = "👶 You are still a minor!";
  } else {
    ageResult.textContent = "⚠️ Please enter a valid age!";
  }
});

// ====================
// ❤️ PART 2: Functions (Reusable Logic)
// ====================

// Function 1: Calculate the sum of two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("5 + 10 =", addNumbers(5, 10));

// Function 2: Format a greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Immaculate"));

// ====================
// 🔁 PART 3: Loops
// ====================

// Example 1: For loop - display numbers 1 to 5 in the list
const numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Number: ${i}`;
  numberList.appendChild(li);
}

// Example 2: While loop - simple countdown
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// ====================
// 🌐 PART 4: DOM Manipulation
// ====================
const toggleBtn = document.getElementById("toggleBtn");
const toggleMessage = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", () => {
  // Toggle visibility using style changes
  if (toggleMessage.style.display === "none") {
    toggleMessage.style.display = "block";
  } else {
    toggleMessage.style.display = "none";
  }
});
