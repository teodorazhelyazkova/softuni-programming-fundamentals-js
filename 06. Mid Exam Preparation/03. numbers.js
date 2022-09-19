function numbers(numsStr) {
  const numsArr = numsStr.split(" ").map(Number);
  let sumNums = 0;
  numsArr.forEach((num) => (sumNums += num));
  let averageNum = sumNums / numsArr.length;

  let resultArr = numsArr
    .filter((num) => num > averageNum)
    .sort((a, b) => b - a)
    .slice(0, 5);

  return resultArr.length ? resultArr.join(" ") : "No";
}

numbers("-1 -2 -3 -4 -5 -6");
