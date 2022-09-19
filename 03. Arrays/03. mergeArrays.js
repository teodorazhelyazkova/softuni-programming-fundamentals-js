function mergeArrays(arr1, arr2) {
  const newArray = [];
  arr1.forEach((element, index) => {
    const newElement =
      index % 2 === 0
        ? Number(element) + Number(arr2[index])
        : element + arr2[index];

    newArray.push(newElement);
  });
  console.log(newArray.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
