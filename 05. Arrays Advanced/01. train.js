function train(arr) {

  let passengersInTrainArr = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    
    let command = arr[i].split(" ");

    if (command[0] === "Add") {
      passengersInTrainArr.push(Number(command[1]));
    } else {
      for (let a = 0; a < passengersInTrainArr.length; a++) {
        if (Number(command[0]) + passengersInTrainArr[a] <= maxCapacity) {
          passengersInTrainArr[a] += Number(command[0]);
          break;
        }
      }  
    }
  }
  console.log(passengersInTrainArr.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
