function solve(arr) {
  const biscuitsPerDayPerWorker = Number(arr[0]);
  const workersCount = Number(arr[1]);
  const competitionProduction30Days = Number(arr[2]);
  let total = 0;

  for (let i = 1; i <= 30; i++) {
    let producedPerDay = workersCount * biscuitsPerDayPerWorker;
    if (i % 3 === 0) {
      producedPerDay -= producedPerDay * 0.25;
    }
    total += Math.floor(producedPerDay);
  }
  console.log(`You have produced ${total} biscuits for the past month.`);

  let difference = Math.abs(total - competitionProduction30Days);
  let percentage = (difference / competitionProduction30Days) * 100;
  if (total > competitionProduction30Days) {
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else if (total < competitionProduction30Days) {
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}

solve(["78", "8", "16000"]);
console.log("--------------");
solve(["65", "12", "26000"]);
console.log("--------------");
solve(["163", "16", "67020"]);
