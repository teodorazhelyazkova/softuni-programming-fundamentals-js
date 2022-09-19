function activationKeys(input) {
  let rawActivationKey = input.shift();

  let line = input.shift();

  while (line !== "Generate") {
    let [action, firstParam, secondParam, thirdParam] = line.split(">>>");
    let substring;
    let startIndex;
    let endIndex;

    switch (action) {
      case "Contains":
        if (rawActivationKey.includes(firstParam)) {
          console.log(`${rawActivationKey} contains ${firstParam}`);
        } else {
          console.log("Substring not found!");
        }
        break;
      case "Flip":
        startIndex = Number(secondParam);
        endIndex = Number(thirdParam);
        let firstPart = rawActivationKey.slice(0, startIndex);
        let secondPart = rawActivationKey.slice(endIndex);
        substring = rawActivationKey.slice(startIndex, endIndex);

        switch (firstParam) {
          case "Upper":
            rawActivationKey = firstPart + substring.toUpperCase() + secondPart;
            break;
          case "Lower":
            rawActivationKey = firstPart + substring.toLowerCase() + secondPart;
            break;
        }
        console.log(rawActivationKey);
        break;
      case "Slice":
        startIndex = Number(firstParam);
        endIndex = Number(secondParam);
        substring = rawActivationKey.slice(startIndex, endIndex);
        rawActivationKey = rawActivationKey.replace(substring, "");
        console.log(rawActivationKey);
        break;
    }
    line = input.shift();
  }
  console.log(`Your activation key is: ${rawActivationKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
