function bonAppetit(bill, k, b) {
  const annaBill = bill.reduce((total, itemPrice, currentItem) => {
    // don't add the item anna didn't eat.
    if (currentItem === k) {
      return total;
    }

    return total + itemPrice;
  }, 0);
  const annaBillSplit = annaBill / 2;

  // if the split bill is equal to what anna paid
  if (annaBillSplit === b) {
    console.log("Bon Appetit");
    return; // stop running.
  }

  // anna get's this back.
  console.log(b - annaBillSplit);
}
bonAppetit([4, 1], [3, 10, 2, 9], 7);
