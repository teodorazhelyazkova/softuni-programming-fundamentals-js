function manOWar(arr) {
  let statusPirateShip = arr.shift().split(">").map(Number);
  let statusWarship = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());

  let index = 0;
  let line = arr[index];
  index++;
  while (line !== "Retire") {
    let tokens = line.split(" ");
    let damage, i;

    switch (tokens[0]) {
      case "Fire":
        i = Number(tokens[1]);
        damage = Number(tokens[2]);
        if (i >= 0 && i < statusWarship.length) {
          statusWarship[i] -= damage;
        }
        if (statusWarship[i] <= 0) {
          return "You won! The enemy ship has sunken.";
        }
        break;
      case "Defend":
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        damage = Number(tokens[3]);
        if (
          startIndex >= 0 &&
          endIndex >= 0 &&
          startIndex < statusPirateShip.length &&
          endIndex < statusPirateShip.length
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            statusPirateShip[i] -= damage;
            if (statusPirateShip[i] <= 0) {
              return "You lost! The pirate ship has sunken.";
            }
          }
        }

        break;
      case "Repair":
        i = Number(tokens[1]);
        let health = Number(tokens[2]);
        if (i >= 0 && i < statusPirateShip.length) {
          if (statusPirateShip[i] + health <= maxHealth) {
            statusPirateShip[i] += health;
          } else {
            statusPirateShip[i] = maxHealth;
          }
        }
        break;
      case "Status":
        let breakPoint = 0.2 * maxHealth;
        let sections = statusPirateShip.filter((el) => el < breakPoint);
        console.log(`${sections.length} sections need repair.`);
        break;
    }
    line = arr[index];
    index++;
  }
  let sumPirateshipSections = 0;
  let sumWarshipSections = 0;
  statusPirateShip.forEach((num) => (sumPirateshipSections += num));
  statusWarship.forEach((num) => (sumWarshipSections += num));
  let result = [
    `Pirate ship status: ${sumPirateshipSections}`,
    `Warship status: ${sumWarshipSections}`,
  ];

  return result.join("\n");
}

let solve = manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
console.log(solve);
