function adAstra(input) {
  const regex =
    /([|#])(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]{1,4}|10000)\1/g;
  //   let match = regex.exec(input[0]);
  let allMatches = input[0].matchAll(regex);
  let caloriesSum = 0;

  for (let element of allMatches) {
    caloriesSum += Number(element.groups.calories);
  }
console.log([...allMatches])
  const days = caloriesSum / 2000;
  console.log(`You have food to last you for: ${Math.floor(days)} days!`);

  allMatches = input[0].matchAll(regex);
  for (let element of allMatches) {
    console.log(
      `Item: ${element.groups.item}, Best before: ${element.groups.date}, Nutrition: ${element.groups.calories}`
    );
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
