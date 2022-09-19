function arrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.push(arr[0]);
    arr.shift(arr[0]);
  }
  console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
