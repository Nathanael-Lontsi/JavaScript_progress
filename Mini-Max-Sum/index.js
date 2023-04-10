function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  let array = arr.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    minSum += array[i];
  }
  for (let i = 1; i < array.length; i++) {
    maxSum += array[i];
  }
  console.log(minSum + " " + maxSum);
}
miniMaxSum([1, 3, 5, 7, 9]);
