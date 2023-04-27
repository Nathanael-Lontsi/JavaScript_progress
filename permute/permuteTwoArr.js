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
}
twoArrays(k, A, B);
