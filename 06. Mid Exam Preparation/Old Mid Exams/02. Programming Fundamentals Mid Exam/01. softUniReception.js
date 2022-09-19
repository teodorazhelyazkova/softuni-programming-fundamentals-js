function softUniReception(arr) {
  const firstEmployeeStudentsPerHour = Number(arr[0]);
  const secondEmployeeStudentsPerHour = Number(arr[1]);
  const thirdEmployeeStudentsPerHour = Number(arr[2]);
  const studentsCount = Number(arr[3]);

  const totalEfficiencyPerHour =
    firstEmployeeStudentsPerHour +
    secondEmployeeStudentsPerHour +
    thirdEmployeeStudentsPerHour;

  let hoursCount = studentsCount / totalEfficiencyPerHour;

  if (hoursCount > 3 && hoursCount % 3 == 0) {
    hoursCount += hoursCount / 3 - 1;
  } else if (hoursCount > 3) {
    hoursCount += hoursCount / 3;
  }
  if (hoursCount < 3) {
    console.log(`Time needed: ${Math.ceil(hoursCount)}h.`);
  }
}

softUniReception(["5", "6", "4", "20"]);
