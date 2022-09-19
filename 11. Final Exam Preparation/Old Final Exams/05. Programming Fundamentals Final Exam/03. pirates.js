function pirates(input) {
  let line = input.shift();
  let cities = {};

  while (line !== "Sail") {
    let [city, givenPopulation, givenGold] = line.split("||");
    if (cities.hasOwnProperty(city)) {
      cities[city]["population"] += Number(givenPopulation);
      cities[city]["gold"] += Number(givenGold);
    } else {
      cities[city] = {};
      cities[city]["population"] = Number(givenPopulation);
      cities[city]["gold"] = Number(givenGold);
    }
    line = input.shift();
  }
  line = input.shift();
  while (line !== "End") {
    let [action, town, people, gold] = line.split("=>");

    switch (action) {
      case "Plunder":
        cities[town]["population"] -= Number(people);
        cities[town]["gold"] -= Number(gold);

        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        if (cities[town]["population"] <= 0 || cities[town]["gold"] <= 0) {
          delete cities[town];
          console.log(`${town} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        let givenGold = Number(people);
        if (givenGold < 0) {
          console.log("Gold added cannot be a negative number!");
          break;
        }
        cities[town]["gold"] += givenGold;
        console.log(
          `${givenGold} gold added to the city treasury. ${town} now has ${cities[town]["gold"]} gold.`
        );
        break;
    }
    line = input.shift();
  }

  if (Object.keys(cities).length === 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(cities).length
      } wealthy settlements to go to:`
    );

    for (const [city, cityInfo] of Object.entries(cities)) {
      console.log(
        `${city} -> Population: ${cityInfo.population} citizens, Gold: ${cityInfo.gold} kg`
      );
    }
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
