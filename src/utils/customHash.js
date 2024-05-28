// Custom hash function takes a string as input and returns an integer hash code
function customHash(str) {
    let hash = 0;
    // If the string is empty, return 0 as the hash.
    if (str.length === 0) return hash;
    // Iterate over each character in the input string.
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i); // Get the ASCII value of the current character
      hash = (hash << 5) - hash + char; // Shift the hash left by 5 bits and add the ASCII value
      hash |= 0; // Convert to 32-bit integer
    }
    // Return the absolute value of the hash to ensure it is a positive number
    return Math.abs(hash);
  }
  
  module.exports = { customHash };
  