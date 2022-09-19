function heroesOfCodeAndLogic(input) {
  const heroesNum = input.shift();
  let heroes = {};
  for (let i = 0; i < heroesNum; i++) {
    const [heroName, hitPoints, manaPoints] = input.shift().split(" ");
    heroes[heroName] = {};
    heroes[heroName]["hitPoints"] = Number(hitPoints);
    heroes[heroName]["manaPoints"] = Number(manaPoints);
  }
  let line = input.shift();
  while (line !== "End") {
    let [action, heroName, firstParam, secondParam] = line.split(" - ");
    let amount;
    switch (action) {
      case "CastSpell":
        let manaPointsNeeded = Number(firstParam);
        let spellName = secondParam;

        if (heroes[heroName]["manaPoints"] >= manaPointsNeeded) {
          heroes[heroName]["manaPoints"] -= manaPointsNeeded;
          console.log(
            `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]["manaPoints"]} MP!`
          );
        } else {
          console.log(
            `${heroName} does not have enough MP to cast ${spellName}!`
          );
        }
        break;
      case "TakeDamage":
        let damage = Number(firstParam);
        let attacker = secondParam;

        heroes[heroName]["hitPoints"] -= damage;
        if (heroes[heroName]["hitPoints"] > 0) {
          console.log(
            `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]["hitPoints"]} HP left!`
          );
        } else {
          delete heroes[heroName];
          console.log(`${heroName} has been killed by ${attacker}!`);
        }
        break;
      case "Recharge":
        amount = Number(firstParam);
        let currentManaPoints = heroes[heroName]["manaPoints"];
        heroes[heroName]["manaPoints"] += amount;
        if (heroes[heroName]["manaPoints"] > 200) {
          heroes[heroName]["manaPoints"] = 200;
          amount = 200 - currentManaPoints;
        }
        console.log(`${heroName} recharged for ${amount} MP!`);
        break;
      case "Heal":
        amount = Number(firstParam);
        let currentHitPoints = heroes[heroName]["hitPoints"];
        heroes[heroName]["hitPoints"] += amount;
        if (heroes[heroName]["hitPoints"] > 100) {
          heroes[heroName]["hitPoints"] = 100;
          amount = 100 - currentHitPoints;
        }
        console.log(`${heroName} healed for ${amount} HP!`);
        break;
    }
    line = input.shift();
  }

  for (const [hero, heroInfo] of Object.entries(heroes)) {
    console.log(`${hero}`);
    console.log(`  HP: ${heroInfo.hitPoints}`);
    console.log(`  MP: ${heroInfo.manaPoints}`);
  }
}

heroesOfCodeAndLogic([
  4,
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
