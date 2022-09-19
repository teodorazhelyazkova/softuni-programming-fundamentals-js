function sorting(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length / 2; i++) {
    resultArr.push(arr.sort((a, b) => b - a)[i]);
    if (resultArr.length !== arr.length) {
      resultArr.push(arr.sort((a, b) => a - b)[i]);
    }
  }
  console.log(resultArr.join(" "));
}

sorting([1, 21, 3]);
