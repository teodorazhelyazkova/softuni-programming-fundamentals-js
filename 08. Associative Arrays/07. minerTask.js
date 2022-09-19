function minerTask(arr) {
  let mine = {};

  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!mine.hasOwnProperty(resource)) {
      mine[resource] = new Set();
    }
    mine[resource] = mine[resource].add(quantity);
  }
  let resources = Object.entries(mine);

  for (const [resource, value] of resources) {
    let allValues = new Set(value);
    let sum = 0;
    for (const value of allValues) {
      sum += value;
    }
    console.log(`${resource} -> ${sum}`);
  }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );
