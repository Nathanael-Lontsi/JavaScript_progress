function sockMerchant(n, ar) {
  // Write your code here
  let count = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      count++;
      i++;
    }
  }
  console.log(count);
}
sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
