// Example 1

const A = [0, 1],
  B = [0, 2],
  k = 1;

function twoArrays(k, A, B) {
  const arr1 = A.sort((a, b) => a - b);
  const arr2 = B.sort((a, b) => b - a);
  let permute = "YES";
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] < k) {
      console.log((permute = "NO"));
    }
  }
  console.log(permute);
  console.log("NO");
}
twoArrays(k, A, B);

// Example 2

function tooArrays(k, A, B) {
  const a = A.sort((a, b) => b - a);
  let permutation = "YES";
  for (let i = 0; i < a.length; i++) {
    if (a[i] + B[i] > k) {
      console.log((permutation = "NO"));
    }
  }
  console.log(permutation);
  console.log("NO");
}
tooArrays(10, [2, 1, 3], [7, 8, 9]);
