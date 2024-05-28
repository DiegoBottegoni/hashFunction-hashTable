### Documentation

#### customHash Function
Takes a string and returns a uniformly distributed integer hash code.

#### HashTable Class
- **constructor(size)**: Initializes the hash table with a specified size.
- **hash(key)**: Computes the index for a given key using the custom hash function.
- **insert(key, value)**: Inserts a key-value pair into the hash table.
- **get(key)**: Retrieves the value associated with a key.
- **delete(key)**: Removes a key-value pair from the hash table.

### Analysis

#### Time Complexity:
- **Insertion**: Average O(1), worst-case O(n) due to collisions.
- **Retrieval**: Average O(1), worst-case O(n) due to collisions.
- **Deletion**: Average O(1), worst-case O(n) due to collisions.

#### Trade-offs:
- **Separate Chaining**: Easy to implement and handles collisions well. However, it can lead to increased memory usage due to the linked lists.
- **Uniform Distribution**: Ensures that data is spread out evenly, minimizing the likelihood of collisions and maintaining efficient operations.
