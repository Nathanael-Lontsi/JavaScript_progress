const n = 3;

function flippingBits(n) {
  // convert number to binary
  let binary = n.toString(2);
  console.log(binary);

  // Add the missing 0's
  while (binary.length < 32) {
    binary = "0" + binary;
  }

  // Change numbers (0 to 1) and (1 to 0)
  const array = binary.split("").map(function (number) {
    if (number == "1") {
      return 0;
    } else {
      return 1;
    }
  });

  // Join the numbers and convert them to base 10
  console.log(parseInt(array.join(""), 2));
}
flippingBits(n);
