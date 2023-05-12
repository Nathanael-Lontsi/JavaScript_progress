const arr = [1, 1, 3, 2, 1];

function countingSort(arr) {
  let occurrence = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    occurrence[arr[i]] += 1;
  }
  console.log(occurrence);
}
countingSort(arr);
