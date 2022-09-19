function emojiDetector(str) {
  const coolThresholdSum = str[0]
    .match(/\d/g)
    .map((num) => num.split(""))
    .reduce((value1, value2) => {
      return Number(value1) * Number(value2);
    }, 1);

  const regex = /(\:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
  const emojis = str[0].match(regex);

  console.log(`Cool threshold: ${coolThresholdSum}`);
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

  for (let emoji of emojis) {
    let lettersSum = 0;
    for (let letter of emoji) {
      if (letter !== ":" && letter !== "*") {
        let letterValue = letter.charCodeAt(0);
        lettersSum += letterValue;
      }
    }
    if (lettersSum >= coolThresholdSum) {
      console.log(`${emoji}`);
    }
  }
}
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
