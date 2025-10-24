function removeElements(nums, val) {
  let k = 0;  // 🧠 'k' will count how many elements are NOT equal to 'val'
               // It also points to the next empty spot to place a good number

  for (let i = 0; i < nums.length; i++) {  // 👣 Go through each element one by one

    if (nums[i] !== val) {   // ✅ If current number is NOT equal to the value we want to remove
      nums[k] = nums[i];     // 👉 Move it to the 'front' of the array (at index k)
      k++;                   // ➕ Increase k so next good number goes to the next position
    }

    // ❌ If nums[i] === val, do nothing (skip it)
  }

  return k; // 🎯 return how many good numbers are left
}
