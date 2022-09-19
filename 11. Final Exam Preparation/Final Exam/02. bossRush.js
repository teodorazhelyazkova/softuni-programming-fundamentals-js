function bossRush(input) {
  const n = Number(input.shift());
  const regex =
    /(\|)(?<boss>[A-Z]{4,})\1[\:](\#)(?<title>[A-Za-z]+ [A-Za-z]+)(\#)/g;

  for (let i = 0; i < n; i++) {
    let valid = input[i].match(regex);

    if (valid) {
      let [boss, title] = input[i].split(":");
      boss = boss.split("|").join("");
      title = title.split("#").join("");

      console.log(`${boss}, The ${title}`);
      console.log(`>> Strength: ${boss.length}`);
      console.log(`>> Armor: ${title.length}`);
    } else {
      console.log("Access denied!");
    }
  }
}
bossRush([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
