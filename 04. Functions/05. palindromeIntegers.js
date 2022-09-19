function palindromeIntegers(arr) {
  arr.forEach((item) => {
    if (item.toString().split("").reverse().join("") === String(item)) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
}

palindromeIntegers([123, 323, 421, 121]);
