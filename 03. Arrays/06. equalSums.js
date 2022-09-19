function equalSums(arr) {
  let foundIndex = "no";

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }

    for (let r = i + 1; r < arr.length; r++) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}

equalSums([1]);
