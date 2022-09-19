function arrayModifier(arr) {
  let arrayToModify = arr.shift().split(" ").map(Number);

  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "end") {
    let tokens = command.split(" ");
    let operation = tokens[0];
    let index1, index2;

    switch (operation) {
      case "swap":
        index1 = Number(tokens[1]);
        index2 = Number(tokens[2]);
        let temp = arrayToModify[index1];
        arrayToModify[index1] = arrayToModify[index2];
        arrayToModify[index2] = temp;
        break;
      case "multiply":
        index1 = Number(tokens[1]);
        index2 = Number(tokens[2]);
        arrayToModify[index1] = arrayToModify[index1] * arrayToModify[index2];
        break;
      case "decrease":
        for (let i = 0; i < arrayToModify.length; i++) {
          arrayToModify[i] -= 1;
        }
        break;
    }
    command = arr[index];
    index++;
  }
  console.log(arrayToModify.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
    "decrease",
  "end",
]);
