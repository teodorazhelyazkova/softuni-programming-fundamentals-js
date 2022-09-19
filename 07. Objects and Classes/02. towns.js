function towns(arr) {
  const currentTown = {};

  for (let city of arr) {
    let [currentTownName, latitude, longtitude] = city.split(" | ");
    currentTown.town = currentTownName;
    currentTown.latitude = Number(latitude).toFixed(2);
    currentTown.longitude = Number(longtitude).toFixed(2);
    console.log(currentTown);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
