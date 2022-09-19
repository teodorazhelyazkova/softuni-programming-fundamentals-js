function solve(arr) {
  let phones = arr.shift().split(", ");
  let index = 0;
  let command = arr[index];
  index++;
  let phone;

  while (command !== "End") {
    let tokens = command.split(" ");
    switch (tokens[0]) {
      case "Add":
        phone = tokens[2];
        if (phones.includes(phone)) {
          break;
        }
        phones.push(phone);
        break;
      case "Remove":
        phone = tokens[2];
        if (phones.includes(phone)) {
          let i = phones.indexOf(phone);
          phones.splice(i, 1);
        }
        break;
      case "Bonus":
        let oldPhoneNewPhone = tokens[3].split(":");
        let oldPhone = oldPhoneNewPhone[0];
        let newPhone = oldPhoneNewPhone[1];

        if (phones.includes(oldPhone)) {
          let i = phones.indexOf(oldPhone);
          phones.splice(i + 1, 0, newPhone);
        }
        break;
      case "Last":
        phone = tokens[2];
        if (phones.includes(phone)) {
            let i = phones.indexOf(phone);
            let removed = phones.splice(i, 1);
            phones.push(removed);
          }
        break;
    }
    command = arr[index];
    index++;
  }
  console.log(phones.join(", "));
}

// solve([
//   "SamsungA50, MotorolaG5, HuaweiP10",
//   "Last - SamsungA50",
//   "Add - MotorolaG5",
//   "End",
// ]);

// solve([
//   "SamsungA50, MotorolaG5, IphoneSE",
//   "Add - Iphone10",
//   "Remove - IphoneSE",
//   "End",
// ]);

solve([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
