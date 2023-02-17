export function decimalToBinary(decimalNumber) {
  let binary = '';

  while (decimalNumber > 0) {
    if (decimalNumber % 2 == 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }

    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

// Example: 122

// 122 / 2 = 61 | 0
// 61 / 2 = 30  | 1
// 30 / 2 = 15  | 0
// 15 / 2 = 7   | 1
// 7 / 2 = 3    | 1
// 3 / 2 = 1    | 1
// 1 / 2 = 0    | 1

// 122 (decimal) = 1111010 (binary)