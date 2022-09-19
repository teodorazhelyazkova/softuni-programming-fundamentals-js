function shoppingList(arr) {
  let initialList = arr.shift().split("!");

  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "Go Shopping!") {
    let tokens = command.split(" ");
    let i;

    switch (tokens[0]) {
      case "Urgent":
        if (!initialList.includes(tokens[1])) {
          initialList.unshift(tokens[1]);
        }
        break;
      case "Unnecessary":
        if (initialList.includes(tokens[1])) {
          i = initialList.indexOf(tokens[1]);
          initialList.splice(i, 1);
        }
        break;
      case "Correct":
        if (initialList.includes(tokens[1])) {
          i = initialList.indexOf(tokens[1]);
          initialList.splice(i, 1, tokens[2]);
        }
        break;
      case "Rearrange":
        if (initialList.includes(tokens[1])) {
          i = initialList.indexOf(tokens[1]);
          initialList.push(initialList.splice(i, 1));
        }
        break;
    }
    command = arr[index];
    index++;
  }
  console.log(initialList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
