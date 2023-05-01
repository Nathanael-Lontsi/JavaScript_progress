function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApple = 0,
    countOrange = 0;
  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) {
      countApple++;
    }
  });
  console.log(countApple);
  oranges.forEach((orange) => {
    if (b + orange >= s && b + orange <= t) {
      countOrange++;
    }
  });
  console.log(countOrange);
}
countApplesAndOranges(7, 11, 5, 15, 3, 2);
