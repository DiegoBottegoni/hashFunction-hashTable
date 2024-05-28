// Import the custom hash function
const { customHash } = require('../utils/customHash.js');

class HashTable {
  constructor(size = 50) {
    // Initialize the hash table with an array of the specified size
    this.table = new Array(size); // Create an array of the specified size
    this.size = size; // Store the size of the table
  }

  hash(key) {
    // Implement the custom hash function and calculate the index
    return customHash(key) % this.size;
  }

  insert(key, value) {
    // Insert a key-value pair into the hash table
    const index = this.hash(key); // Calculate the index using the hash function
    if (!this.table[index]) {
      this.table[index] = []; // Initialize the linked list if it is empty
    }
    // Check if the key already exists in the linked list
    for (let [k, v] of this.table[index]) {
      if (k === key) {
        v = value; // Update the value if the key already exists
        return;
      }
    }
    this.table[index].push([key, value]); // Insert the new key-value pair
  }

  get(key) {
    // Retrieve the value associated with a key
    const index = this.hash(key); // Calculate the index using the hash function
    if (!this.table[index]) return undefined; // Return undefined if the key is not found
    for (let [k, v] of this.table[index]) {
      if (k === key) return v; // Return the value if the key is found
    }
    return undefined; // Return undefined if the key is not found
  }

  delete(key) {
    // Delete a key-value pair from the hash table
    const index = this.hash(key); // Calculate the index using the hash function
    if (!this.table[index]) return; // Do nothing if the key is not found
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1); // Remove the key-value pair if the key is found
        return;
      }
    }
  }
}

module.exports = { HashTable };
