function oddAndEvenSum(num) {
  const numArr = num.toString().split("");
  let sumEven = 0;
  let sumOdd = 0;

  numArr.forEach((digit) =>
    Number(digit) % 2 === 0
      ? (sumEven += Number(digit))
      : (sumOdd += Number(digit))
  );

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435);
