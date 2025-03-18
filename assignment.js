// Define variables
let a = 15;
let b = 7;

// Perform calculations
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = (a / b).toFixed(2); // Round to 2 decimals
let remainder = a % b;

// Log results
console.log(`Sum of ${a} and ${b} is: ${sum}`);
console.log(`Difference of ${a} and ${b} is: ${difference}`);
console.log(`Product of ${a} and ${b} is: ${product}`);
console.log(`Quotient of ${a} divided by ${b} (rounded to 2 decimals) is: ${quotient}`);
console.log(`Remainder when ${a} is divided by ${b} is: ${remainder}`);


// Declare variable
let x = 10;

// Increase x by 5
x += 5;
console.log(`After increasing by 5, x = ${x}`);

// Multiply x by 2
x *= 2;
console.log(`After multiplying by 2, x = ${x}`);

// Decrease x by 3
x -= 3;
console.log(`After decreasing by 3, x = ${x}`);
// Declare variables
let p = 10;
let q = 20;

// Perform comparisons and log results
console.log(`Is p < q? ${p < q}`);       // true
console.log(`Is p === q? ${p === q}`);   // false
console.log(`Is p !== q? ${p !== q}`);   // true

const student = {
    name: "Mikhail Miderma",
    age: 20,
    major: "Software Engineering",
    grades: [88, 92, 76],
    isEnrolled: true,
    
    introduce: function() {
        return `Hi, my name is ${this.name} and I study ${this.major}.`;
    },
    
    averageGrade: function() {
        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    }
};

// Accessing properties
console.log(student.name); // Dot notation
console.log(student["major"]); // Bracket notation

// Updating properties
student.age = 21;
student.year = "Sophomore";

// Logging the updated object
console.log(student);

// Array Operations
const colors = ["red", "blue", "green", "yellow", "purple"];
console.log(`First color: ${colors[0]}, Last color: ${colors[colors.length - 1]}`);

// Replacing second element
colors[1] = "orange";

// Adding colors
colors.push("pink");
colors.unshift("black");

// Removing first and last elements
const removedFirst = colors.shift();
const removedLast = colors.pop();
console.log(`Removed colors: ${removedFirst}, ${removedLast}`);
console.log(`Final colors array:`, colors);

// Removing two elements starting at index 1 and inserting new ones
const removedColors = colors.splice(1, 2, "cyan", "magenta");
console.log(`Removed colors:`, removedColors);
console.log(`Modified colors array:`, colors);

// Extracting a subset of colors
const subsetColors = colors.slice(1, 3);
console.log(`Subset of colors:`, subsetColors);
console.log(`Original colors array remains unchanged:`, colors);

// Iterating through colors with index
for (let i = 0; i < colors.length; i++) {
    console.log(`Index ${i}: ${colors[i]}`);
}
// Iterating through colors using forEach
colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`);
});