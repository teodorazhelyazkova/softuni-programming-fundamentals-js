function nxnMatrix(num) {
  let matrix = [];

  for (let column = 0; column < num; column++) {
    let row = [];
    for (let i = 0; i < num; i++) {
        row.push(num);
    }
    matrix.push(row.join(" "));
  }
  console.log(matrix.join("\n"));
}

nxnMatrix(3);
