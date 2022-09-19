function bombNumbers(input, bomb) {
  let numbers = [...input];
  const [bombNum, bombPower] = bomb;
  let resultSum = 0;

  while (numbers.includes(bombNum)) {
    let index = numbers.indexOf(bombNum);
    numbers.splice(Math.max(0, index - bombPower), 2 * bombPower + 1);
    index = 0;
  }

  numbers.forEach((el) => (resultSum += el));

  console.log(resultSum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
