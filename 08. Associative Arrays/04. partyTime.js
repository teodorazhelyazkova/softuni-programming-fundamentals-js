function partyTime(arr) {
  let vip = [];
  let normal = [];
  let isParty = false;

  for (const line of arr) {
    if (line === "PARTY") {
      isParty = true;
      continue;
    }

    let firstChar = line[0];
    if (!isParty) {
      if (isNaN(firstChar)) {
        normal.push(line);
      } else {
        vip.push(line);
      }
    } else {
      if (isNaN(firstChar)) {
        let index = normal.indexOf(line);
        normal.splice(index, 1);
      } else {
        let index = vip.indexOf(line);
        vip.splice(index, 1);
      }
    }
  }
  let size = vip.length + normal.length;
  console.log(size);

  for (const code of vip) {
    console.log(code);
  }
  for (const code of normal) {
    console.log(code);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
