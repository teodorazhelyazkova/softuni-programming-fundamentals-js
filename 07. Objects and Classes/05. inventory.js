function inventory(arr) {
  let heros = [];

  for (const heroInfo of arr) {
    let [name, level, items] = heroInfo.split(" / ");
    // let splitedItems = items.split(", ");
    let currentHero = {
      name: name,
      level: Number(level),
      items: items,
    };
    heros.push(currentHero);
  }
  let sortedByLevel = heros.sort((a, b) => {
    return a.level - b.level;
  });
  sortedByLevel.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
