function softUniBarIncome(input) {
  let totalSum = 0;
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$%|.]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>\d+\.?\d+)?\$/gm;

  let text = input.join("-");

  let current = pattern.exec(text);
  while (current) {
    let currentPrice = current.groups.count * current.groups.price;
    console.log(
      `${current.groups.name}: ${
        current.groups.product
      } - ${currentPrice.toFixed(2)}`
    );
    totalSum += currentPrice;
    current = pattern.exec(text);
  }
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
