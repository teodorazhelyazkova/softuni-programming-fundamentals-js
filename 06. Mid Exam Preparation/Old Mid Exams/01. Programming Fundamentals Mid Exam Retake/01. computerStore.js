function computerStore(arr) {
  let totalPriceWithoutTaxes = 0;
  let isDiscounted = false;

  for (let item of arr) {
    if (Number(item) < 0) {
      console.log("Invalid price!");
    } else if (item === "special") {
      isDiscounted = true;
    } else if (item === "regular") {
      break;
    } else {
      totalPriceWithoutTaxes += Number(item);
    }
  }

  let totalAmountOfTaxes = totalPriceWithoutTaxes * 0.2;

  let totalPriceWithTaxes = totalAmountOfTaxes + totalPriceWithoutTaxes;

  if (isDiscounted) {
    totalPriceWithTaxes -= totalPriceWithTaxes * 0.1;
  }

  if (totalPriceWithoutTaxes === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
Taxes: ${totalAmountOfTaxes.toFixed(2)}$
-----------
Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
  }
}

computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
