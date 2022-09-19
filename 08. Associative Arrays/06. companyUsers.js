function companyUsers(arr) {
  let result = new Map();

  for (const line of arr) {
    let tokens = line.split(" -> ");
    let companyName = tokens[0];
    let userName = tokens[1];

    if (!result.has(companyName)) {
      result.set(companyName, new Set());
    }
    result.get(companyName).add(userName);
  }

  let sortResult = Array.from(result).sort();
  for (const [key, value] of sortResult) {
    console.log(`${key}`);
    for (const user of value) {
      console.log(`-- ${user}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
