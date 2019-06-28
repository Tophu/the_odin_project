// Passing function in variable with two arguments
const repeatString = function (word, num) {
  // Control Flow/Conditional if the number is less than 0, return error
  if (num < 0) return 'ERROR';
  // Create a variable to hold the string that will be returned, an empty string is the same as 0; 
  let string = '';
  // For loop with placeholder 'i', set the base value of 'i', have the limit to less than the number and increment it.  
  for (let i = 0; i < num; i++) {
    // Increment the 'string' and add them to 'word'
    string += word;
  }
  // Return the string
  return string
}

module.exports = repeatString
