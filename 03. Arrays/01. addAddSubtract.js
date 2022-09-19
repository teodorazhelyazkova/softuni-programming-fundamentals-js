function addAddSubtract(arr) {
  let newArr = [];
  let sumArr = 0;
  let sumNewArr = 0;

  arr.forEach((num, index) => {
    const value = num % 2 === 0 ? num + index : num - index;

    newArr.push(value);
    sumNewArr += value;
    sumArr += num;

    // if (num % 2 === 0) {
    //   newArr.push(num + index);
    //   sumNewArr += num + index;
    // } else {
    //   newArr.push(num - index);
    //   sumNewArr += num - index;
    // }
  });

  console.log(newArr);
  console.log(sumArr);
  console.log(sumNewArr);
}

addAddSubtract([5, 15, 23, 56, 35]);
