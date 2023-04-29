const b = 60,
  keyboards = [40, 50, 60],
  drives = [5, 8, 12];

function getMoneySpent(keyboards, drives, b) {
  let ans = 0, 
  n = drives.length,
  m = keyboards.length;
  for (let i = 0; i < m - 1; ++i) {
    for (let j = 0; j < n; j++) {
      if (m[i] + n[j] == ans) {
        console.log(ans);
      } else {
        console.log(-1);
      }
    }
  }
}
getMoneySpent(keyboards, drives, b);
