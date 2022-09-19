function theLift(arr) {
  let peopleNum = Number(arr[0]);
  let liftState = arr[1].split(" ").map((item) => Number(item));
  let fullCapacity = 4;
  for (let i = 0; i < liftState.length; i++) {
    if (peopleNum == 0) break;

    let freeCapacity = fullCapacity - liftState[i];

    if (peopleNum >= freeCapacity) {
      liftState[i] = fullCapacity;
      peopleNum -= freeCapacity;
    } else if (peopleNum > 0) {
      liftState[i] += peopleNum;
      peopleNum = 0;
    }
  }

  const isFreeSpace = liftState.some((item) => item !== 4);

  if (isFreeSpace) {
    console.log("The lift has empty spots!");
    console.log(liftState.join(" "));
  } else if (!isFreeSpace && peopleNum == 0) {
    console.log(liftState.join(" "));
  } else if (!isFreeSpace && peopleNum > 0) {
    console.log(`There isn't enough space! ${peopleNum} people in a queue!`);
    console.log(liftState.join(" "));
  }
}

theLift(["20", "0 2 0"]);
