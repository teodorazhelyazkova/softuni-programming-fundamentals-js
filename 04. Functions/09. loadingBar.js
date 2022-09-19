function loadingBar(num) {
  let compleated = "%".repeat(num / 10);
  let dotStr = ".".repeat((100 - num)/ 10);

  if (num === 100) {
    console.log("100% Complete");
  } else {
    console.log(`${num}% [${compleated}${dotStr}]
Still loading...`);
  }
}

loadingBar(10);
