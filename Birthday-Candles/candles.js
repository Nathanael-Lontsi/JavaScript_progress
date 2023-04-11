// Method 1

function birthdayCakeCandles(candles) {
  let newArr = candles.sort((a, b) => b - a);
  let ans = 0;
  let index = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === index) {
      ans++;
    }
  }
  console.log(ans);
}
birthdayCakeCandles([4, 4, 1, 3]);

// Method 2

function dayCakeCandles(candles) {
  const newArr = candles.sort((a, b) => b - a);
  const index = newArr[0];
  const ans = 0;
}
dayCakeCandles([4, 4, 1, 3]);
