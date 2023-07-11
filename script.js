function threeSum(s, target) {
 S.sort((a, b) => a - b);

  let closestSum = Infinity; // Variable to store the closest sum
  let minDiff = Infinity; // Variable to store the minimum difference

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1; // Pointer to the element on the right of current element
    let right = S.length - 1; // Pointer to the last element

    while (left < right) {
      const sum = S[i] + S[left] + S[right]; // Calculate the current sum

      // If the current sum is equal to the target, return it
      if (sum === target) {
        return sum;
      }

      const diff = Math.abs(sum - target); // Calculate the absolute difference

      // Update the closest sum and minimum difference if necessary
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Move the left pointer to the right
      } else {
        right--; // Move the right pointer to the left
      }
    }
  }

  return closestSum; // Return the closest sum
}

module.exports = threeSum;
