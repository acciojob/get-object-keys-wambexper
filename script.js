//your JS code here. If required.
// Define the student object
const student = {
  name: 'John Doe'
};

// Add getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the getKeys method on the student object
console.log(student.getKeys()); // Output: ['name']
