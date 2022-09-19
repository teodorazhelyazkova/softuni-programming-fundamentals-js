function maxNumber(arr) {
  let newArr = [];
  arr.forEach((num, index) => {
    let isBigger = true;
    for (let j = index + 1; j < arr.length; j++) {
      let nextNum = arr[j];
      if (num <= nextNum) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArr.push(num);
    }
  });
  console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
