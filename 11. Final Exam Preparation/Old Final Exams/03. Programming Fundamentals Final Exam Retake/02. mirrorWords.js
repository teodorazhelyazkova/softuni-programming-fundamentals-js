function mirrorWords(input) {
  const regex = /([@#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
  const pairs = input[0].match(regex);
  const mirrorPairs = [];
  if (pairs !== null) {
    for (const pair of pairs) {
      let firstWord, secondWord;
      if (pair.includes("#")) {
        [firstWord, secondWord] = pair.split("##");
      } else if (pair.includes("@")) {
        [firstWord, secondWord] = pair.split("@@");
      }
      secondWord = secondWord.split("").reverse().join("");
      if (firstWord === secondWord) {
        mirrorPairs.push(pair);
      }
    }
    console.log(`${pairs.length} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (mirrorPairs.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    let result = [];
    for (const pair of mirrorPairs) {
      const regex = /[A-Za-z]{3,}/g;
      const mirrorPairText = pair.match(regex);
      result.push(`${mirrorPairText[0]} <=> ${mirrorPairText[1]}`);
    }
    console.log(result.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
