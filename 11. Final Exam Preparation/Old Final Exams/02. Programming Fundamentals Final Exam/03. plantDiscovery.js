function plantDiscovery(input) {
  const n = Number(input.shift());
  const plants = {};

  for (let i = 0; i < n; i++) {
    let line = input.shift();
    let [plant, rarity] = line.split("<->");

    if (!plants.hasOwnProperty(plant)) {
      plants[plant] = {};
    }
    plants[plant]["rarity"] = Number(rarity);
  }

  let command = input.shift();
  while (command !== "Exhibition") {
    let [action, plant, dash, secondParam] = command.split(" ");

    switch (action) {
      case "Rate:":
        if (!plants.hasOwnProperty(plant)) {
          console.log("error");
          break;
        }
        if (!plants[plant].hasOwnProperty("rating")) {
          plants[plant]["rating"] = [];
        }
        plants[plant]["rating"].push(Number(secondParam));
        break;
      case "Update:":
        if (!plants.hasOwnProperty(plant)) {
          console.log("error");
          break;
        }
        plants[plant]["rarity"] = Number(secondParam);
        break;
      case "Reset:":
        if (!plants.hasOwnProperty(plant)) {
          console.log("error");
          break;
        }
        plants[plant]["rating"] = [];
        break;
    }
    command = input.shift();
  }
  console.log("Plants for the exhibition:");

  for (const [plant, plantInfo] of Object.entries(plants)) {
    let avgRating = 0;

    if (
      plantInfo.hasOwnProperty("rating") &&
      [...plantInfo.rating].length > 0
    ) {
      let sumRating = 0;
      let ratingsNum = 0;

      for (const rating of plantInfo["rating"]) {
        ratingsNum++;
        sumRating += rating;
      }
      avgRating = sumRating / ratingsNum;
    }

    console.log(
      `- ${plant}; Rarity: ${plantInfo["rarity"]}; Rating: ${avgRating.toFixed(
        2
      )}`
    );
  }
}
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
