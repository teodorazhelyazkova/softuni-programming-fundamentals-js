function hogwarts(input) {
  let spell = input.shift();
  let line = input.shift();
  while (line !== "Abracadabra") {
    let [action, firstParam, secondParam] = line.split(" ");

    switch (action) {
      case "Abjuration":
        for (let i = 0; i < spell.length; i++) {
          if (spell.charCodeAt(i) >= 97 && spell.charCodeAt(i) <= 122) {
            spell = spell.replace(spell[i], spell[i].toUpperCase());
          }
        }
        console.log(spell);
        break;
      case "Necromancy":
        for (let i = 0; i < spell.length; i++) {
          if (spell.charCodeAt(i) >= 65 && spell.charCodeAt(i) <= 90) {
            spell = spell.replace(spell[i], spell[i].toLowerCase());
          }
        }
        console.log(spell);
        break;
      case "Illusion":
        let index = Number(firstParam);
        let letter = secondParam;

        if (index < 0 || index >= spell.length) {
          console.log("The spell was too weak.");
          break;
        }

        let firstPart = spell.slice(0, index);
        let secondPart = spell.slice(index + 1);
        spell = firstPart + letter + secondPart;
        console.log("Done!");
        break;
      case "Divination":
        let firstSubstr = firstParam;
        let secondSubstr = secondParam;

        if (!spell.includes(firstSubstr)) {
          break;
        }

        spell = spell.split(firstSubstr);
        spell = spell.join(secondSubstr);
        console.log(spell);
        break;
      case "Alteration":
        let substr = firstParam;

        if (!spell.includes(substr)) {
          break;
        }

        spell = spell.replace(substr, "");
        console.log(spell);
        break;
      default:
        console.log("The spell did not work!");
        break;
    }
    line = input.shift();
  }
}
hogwarts([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
