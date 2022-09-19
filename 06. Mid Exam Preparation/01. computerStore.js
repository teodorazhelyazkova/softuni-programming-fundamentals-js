function computerStore(arr) {
  let priceWithoutTaxes = 0;
  let isDiscounted = false;

  for (let item of arr) {
    if (Number(item) < 0) {
      console.log("Invalid price!");
    } else if (item === "special") {
      isDiscounted = true;
    } else if (item === "regular") {
      break;
    } else {
      priceWithoutTaxes += Number(item);
    }
  }

  let taxes = priceWithoutTaxes * 0.2;

  let priceWithTaxes = taxes + priceWithoutTaxes;

  if (isDiscounted) {
    priceWithTaxes -= priceWithTaxes * 0.1;
  }

  if (priceWithoutTaxes === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
  Taxes: ${taxes.toFixed(2)}$
  -----------
  Total price: ${priceWithTaxes.toFixed(2)}$`);
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
