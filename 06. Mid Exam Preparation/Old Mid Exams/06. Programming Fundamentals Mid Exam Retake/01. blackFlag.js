function blackFlag(arr) {
  const days = Number(arr[0]);
  const plunderPerDay = Number(arr[1]);
  const targetPlunder = Number(arr[2]);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += plunderPerDay;
    if (i % 3 === 0) {
      totalPlunder += 0.5 * plunderPerDay;
    }
    if (i % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }
  if (totalPlunder >= targetPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentageLeft = (totalPlunder / targetPlunder) * 100;
    console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["10", "20", "380"]);
