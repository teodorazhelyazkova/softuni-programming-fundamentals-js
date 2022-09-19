function heartDelivery(arr) {
  let heartsState = arr.shift().split("@");

  let index = 0;
  let command = arr[index];
  index++;
  let lastIndex = 0;

  while (command !== "Love!") {
    let tokens = command.split(" ");
    let i = Number(tokens[1]);

    if (lastIndex + i > heartsState.length - 1) {
      i = 0;
    } else {
      i += lastIndex;
    }

    if (heartsState[i] === 0) {
      console.log(`Place ${i} already had Valentine's day.`);
    } else {
      heartsState[i] -= 2;
      if (heartsState[i] === 0) {
        console.log(`Place ${i} has Valentine's day.`);
      }
    }

    lastIndex = i;
    command = arr[index];
    index++;
  }
  console.log(`Cupid's last position was ${lastIndex}.`);

  const didNotCelebrate = heartsState.filter((house) => house !== 0);

  if (didNotCelebrate.length > 0) {
    console.log(`Cupid has failed ${didNotCelebrate.length} places.`);
  } else {
    console.log("Mission was successful.");
  }
}
heartDelivery(["8@8@8@8@8@8@8", "Jump 1", "Jump 2", "Jump 3", "Love!"]);
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelivery([
//   "2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!",
// ]);
