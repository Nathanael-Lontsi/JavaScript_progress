function balancedSums(arr) {
  const newArr = arr.slice(0, 2);
  console.log(newArr);
  const rightSum = arr.pop();
  console.log(rightSum);
  let leftSum = 0;
  for (let i = 0; i < newArr.length; i++) {
    leftSum += newArr[i];
  }
  if (leftSum === rightSum) {
    console.log("YES");
  }
  return "NO";
}
balancedSums([5, 6, 8, 11]);
