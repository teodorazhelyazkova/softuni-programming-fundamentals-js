function cutAndReverse(str) {
  let reversed = str.split("").reverse().join("");
  let sliceOne = reversed.slice(reversed.length / 2);
  let sliceTwo = reversed.slice(0, reversed.length / 2);
  console.log(sliceOne);
  console.log(sliceTwo);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
