function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++; // add one to the current digit

    if (digits[i] < 10) {
      return digits; // no carry → done
    }

    digits[i] = 0; // carry → set current to 0 and continue
  }

  // if all digits became 0, we need a 1 in front
  digits.unshift(1);
  return digits;
}