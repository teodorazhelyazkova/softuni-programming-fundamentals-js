function worldTour(input) {
  let initialString = input.shift();

  let line = input.shift();
  while (line !== "Travel") {
    let [action, firstParam, lastParam] = line.split(":");
    let startIndex;
    let endIndex;

    switch (action) {
      case "Add Stop":
        startIndex = Number(firstParam);
        if (startIndex < 0 || startIndex >= initialString.length) {
          break;
        }
        let value = lastParam;
        let firstPart = initialString.slice(0, startIndex);
        let secondPart = initialString.slice(startIndex);
        initialString = firstPart + value + secondPart;
        console.log(initialString);
        break;
      case "Remove Stop":
        startIndex = Number(firstParam);
        endIndex = Number(lastParam);
        if (!initialString[startIndex] || !initialString[endIndex]) {
          console.log(initialString);
          break;
        }
        let removeStr = initialString.substring(startIndex, endIndex + 1);
        initialString = initialString.replace(removeStr, "");
        console.log(initialString);
        break;
      case "Switch":
        let oldValue = firstParam;
        let newValue = lastParam;
        let pattern = new RegExp(oldValue, "g");
        initialString = initialString.replace(pattern, newValue);
        console.log(initialString);
        break;
    }
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
