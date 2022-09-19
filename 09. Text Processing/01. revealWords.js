function revealWords(words, sentence) {
  let wordsToReveal = words.split(", ");
  let sentenceArr = sentence.split(" ");

  for (const el of wordsToReveal) {
    for (const word of sentenceArr) {
      if (word.includes("*") && word.length === el.length) {
        sentence = sentence.replace(word, el);
      }
    }
  }
  console.log(sentence);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
