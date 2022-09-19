function searchForNumber(arr1, arr2) {
  const [numOfElementsToTake, numOfElementsToDelete, searchedNum] = arr2;

  let newArr = arr1.slice(0, numOfElementsToTake).slice(numOfElementsToDelete);

  let count = 0;

  newArr.forEach((num) => {
    if (num === searchedNum) {
      count++;
    }
  });
  
  console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
