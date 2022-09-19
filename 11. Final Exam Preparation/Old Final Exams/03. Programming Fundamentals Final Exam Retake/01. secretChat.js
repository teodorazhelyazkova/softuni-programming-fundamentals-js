function secretChat(input) {
  let message = input.shift();
  let line = input.shift();
  while (line !== "Reveal") {
    let [action, firstParam, secondParam] = line.split(":|:");
    let substring;
    switch (action) {
      case "InsertSpace":
        let index = Number(firstParam);
        let firstPart = message.slice(0, index);
        let secondPart = message.slice(index);
        message = firstPart + " " + secondPart;
        console.log(message);
        break;
      case "Reverse":
        substring = firstParam;
        if (message.includes(substring)) {
          message = message.replace(substring, "");
          substring = substring.split("").reverse().join("");
          message = message + substring;
          console.log(message);
        } else {
          console.log("error");
        }
        break;
      case "ChangeAll":
        substring = firstParam;
        let replacement = secondParam;
        if (message.includes(substring)) {
          message = message.replace(new RegExp(substring, "g"), replacement);
          console.log(message);
        }
        break;
    }
    line = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
