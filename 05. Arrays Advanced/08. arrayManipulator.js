function arrayManipulator(numbers, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentValues = commands[i].split(" ");
    let currentCommand = currentValues.shift();

    currentValues = currentValues.map(Number);
    let sumPairs = 0;
    let pairsOfSumNums = [];

    switch (currentCommand) {
      case "add":
        let indexToAdd = currentValues[0];
        let elementToAdd = currentValues[1];
        numbers.splice(indexToAdd, 0, elementToAdd);
        break;
      case "addMany":
        let indexToAddMany = currentValues.shift();
        let elementsToAdd = [...currentValues].join(", ");
        numbers.splice(indexToAddMany, 0, elementsToAdd);
        break;
      case "contains":
        console.log(numbers.indexOf(currentValues[0]));
        break;
      case "remove":
        let indexToRemove = currentValues[0];
        numbers.splice(indexToRemove, 1);
        break;
      case "shift":
        for (let i = 0; i < currentValues[0]; i++) {
          numbers.push(numbers.shift());
        }
        break;
      case "sumPairs":
        if (numbers.length % 2 !== 0) {
          numbers.push(0);
        }
        for (let i = 0; numbers.length; i += 2) {
          sumPairs = numbers[i] + numbers[i + 1];
          pairsOfSumNums.push(sumPairs);
        }
        numbers = [...pairsOfSumNums];
        break;
      case "print":
        console.log(`[ ${numbers.join(", ")} ]`);
        break;
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
