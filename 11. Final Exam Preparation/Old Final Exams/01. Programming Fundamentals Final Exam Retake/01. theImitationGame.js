function theImitationGame(input) {
  let message = input.shift();
  let line = input.shift();
  while (line !== "Decode") {
    let [action, firstParam, secondParam] = line.split("|");
    let firstPart, secondPart;
    switch (action) {
      case "Move":
        const numOfLetters = Number(firstParam);
        firstPart = message.slice(0, numOfLetters);
        secondPart = message.slice(numOfLetters);
        message = secondPart + firstPart;
        break;
      case "Insert":
        const index = Number(firstParam);
        const value = secondParam;
        message = message.split("");
        message.splice(index, 0, value)
        message = message.join("");
        break;
      case "ChangeAll":
        const substring = firstParam;
        const replacement = secondParam;
        message = message.split(substring);
        message = message.join(replacement);
        break;
    }
    line = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
