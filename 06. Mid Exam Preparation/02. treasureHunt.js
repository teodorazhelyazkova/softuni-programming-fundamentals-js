function treasureHunt(arr) {
  let state = arr.shift().split("|");

  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "Yohoho!") {
    let tokens = command.split(" ");
    let operation = tokens.shift();
    let indexToRemove;

    switch (operation) {
      case "Loot":
        for (let i = 0; i < tokens.length; i++) {
          if (!state.includes(tokens[i])) {
            state.unshift(tokens[i]);
          }
        }
        break;
      case "Drop":
        indexToRemove = Number(tokens[0]);

        if (indexToRemove < state.length) {
          let deletedElement = state.splice(indexToRemove, 1);
          state.push(deletedElement[0]);
        }
        break;
      case "Steal":
        indexToRemove = Number(tokens[0]);
        let deletedLastThreeItems = state.splice(-indexToRemove);
        console.log(deletedLastThreeItems.join(", "));
        break;
    }
    command = arr[index];
    index++;
  }

  if (state.length) {
    let sum = 0;
    state.forEach((item) => (sum += item.length));
    const averageGain = (sum / state.length).toFixed(2);
    console.log(`Average treasure gain: ${averageGain} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
