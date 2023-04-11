module.exports = function birthdayCakeCandles(candles) {
  let newArr = candles.sort((a, b) => b - a)
  console.log(newArr);
  let ans = 0;
  let index = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === index) {
      ans++
    }
  }
  return ans
}