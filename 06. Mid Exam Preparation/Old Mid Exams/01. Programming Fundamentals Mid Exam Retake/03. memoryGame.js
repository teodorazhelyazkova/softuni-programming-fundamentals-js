function memoryGame(arr) {
  let sequence = arr.shift().split(" ");

  let index = 0;
  let command = arr[index];
  index++;

  let counterMoves = 0;

  while (command !== "end") {
    counterMoves++;
    let integers = command.split(" ").map(Number);
    let index1 = integers[0];
    let index2 = integers[1];
    command = arr[index];
    index++;

    if (
      index1 === index2 ||
      index1 < 0 ||
      index2 < 0 ||
      index1 > sequence.length - 1 ||
      index2 > sequence.length - 1
    ) {
      let middle = sequence.length / 2;
      sequence.splice(middle, 0, `-${counterMoves}a`, `-${counterMoves}a`);
      console.log("Invalid input! Adding additional elements to the board");
      continue;
    }

    if (sequence[index1] === sequence[index2]) {
      let valueToRemove = sequence[index1];
      console.log(
        `Congrats! You have found matching elements - ${sequence[index1]}!`
      );
      sequence = sequence.filter((item) => item !== valueToRemove);
    } else {
      console.log("Try again!");
    }

    if (!sequence.length) {
      console.log(`You have won in ${counterMoves} turns!`);
      break;
    }
  }
  if (sequence.length) {
    console.log(`Sorry you lose :(
${sequence.join(" ")}`);
  }
}

memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
