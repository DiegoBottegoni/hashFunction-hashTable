const { HashTable } = require('./src/models/CustomHashTable.js');

// Inserting, getting and deleting from HashTable
const hashTable = new HashTable();
hashTable.set('name', 'Diego');
hashTable.set('age', 36);
console.log(hashTable.get('name')); // Output: Diego
console.log(hashTable.get('age'));  // Output: 36
hashTable.delete('name');
console.log(hashTable.get('name')); // Output: undefined

hashTable.set('key', 'value1');
hashTable.set('key', 'value2');
console.log(hashTable.get('key'));
