function guineaPig(arr) {
  let foodFor30daysInGrams = Number(arr[0]) * 1000;
  let hayFor30daysInGrams = Number(arr[1]) * 1000;
  let coverFor30daysInGrams = Number(arr[2]) * 1000;
  let petWeightInGrams = Number(arr[3]) * 1000;
  let isEnough = true;

  for (let i = 1; i <= 30; i++) {
    foodFor30daysInGrams -= 300;
    if (i % 2 === 0) {
      hayForDay = 0.05 * foodFor30daysInGrams;
      hayFor30daysInGrams -= hayForDay;
    }

    if (i % 3 === 0) {
      coverFor30daysInGrams -= (1 / 3) * petWeightInGrams;
    }
    if (
      foodFor30daysInGrams < 0 ||
      hayFor30daysInGrams < 0 ||
      coverFor30daysInGrams < 0
    ) {
      isEnough = false;
    }
  }
  if (isEnough) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(
        foodFor30daysInGrams / 1000
      ).toFixed(2)}, Hay: ${(hayFor30daysInGrams / 1000).toFixed(2)}, Cover: ${(
        coverFor30daysInGrams / 1000
      ).toFixed(2)}.`
    );
  } else {
    console.log("Merry must go to the pet store!");
  }
}

guineaPig(["1", "1.5", "3", "1.5"]);
