function solve(arr) {
  let friends = arr.shift().split(", ");

  let index = 0;
  let command = arr[index];
  index++;
  let blacklistedCounter = 0;
  let lostCounter = 0;

  while (command !== "Report") {
    let tokens = command.split(" ");
    let i, name;

    switch (tokens[0]) {
      case "Blacklist":
        name = tokens[1];
        if (friends.includes(name)) {
          i = friends.indexOf(name);
          friends.splice(i, 1, "Blacklisted");
          console.log(`${name} was blacklisted.`);
          blacklistedCounter++;
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        i = Number(tokens[1]);
        if (i >= 0 && i < friends.length) {
          if (friends[i] !== "Blacklisted" && friends[i] !== "Lost") {
            name = friends[i];
            console.log(`${name} was lost due to an error.`);
            friends[i] = "Lost";
            lostCounter++;
          }
        }
        break;
      case "Change":
        i = Number(tokens[1]);
        let newName = tokens[2];
        if (i >= 0 && i < friends.length) {
          let name = friends[i];
          console.log(`${name} changed his username to ${newName}.`);
          friends[i] = newName;
        }
        break;
    }
    command = arr[index];
    index++;
  }

  console.log(`Blacklisted names: ${blacklistedCounter}`);
  console.log(`Lost names: ${lostCounter}`);
  console.log(friends.join(" "));
}

solve([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
