function consecutiveSubstrings(string) {
  // Initialize empty array to store all consecutive substrings
  const result = [];
  // Get the length of the input string
  const n = string.length;
  // Outer loop: iterate over each starting position i
  for (let i = 0; i < n; i++) {
    // Inner loop: iterate over each ending position j starting from i
    for (let j = i; j < n; j++) {
      // Extract substring from i to j (inclusive) and add to result
      result.push(string.substring(i, j + 1));
    }
  }
  // Return the array of all consecutive substrings
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
