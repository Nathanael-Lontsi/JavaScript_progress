const arr = [0, 1, 2, 4, 6, 5, 3];

function findTheMedian(arr) {
  let array = arr.sort((a, b) => a - b);
  console.log(array);
  if (array.length % 2 === 0) {
    let n = array.length / 2;
    let median = (array[n - 1] + array[n]) / 2;
    console.log(median);
  } else {
    let median = Math.floor(array.length / 2);
    console.log(median);
  }
}
findTheMedian(arr);
