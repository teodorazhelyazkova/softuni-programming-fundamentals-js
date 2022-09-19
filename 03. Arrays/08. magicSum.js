function magicSum(array, sum) {
  let validPairs = [];
  let validPair = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        validPair = `${array[i]} ${array[j]}`;
        validPairs.push(validPair);
      }
    }
  }
  console.log(validPairs.join("\n"));
}

magicSum([1, 7, 6, 2, 19, 23], 8);
