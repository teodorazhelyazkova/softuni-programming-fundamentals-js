function wordTracker(arr) {
  let result = new Map();

  let wordsArr = arr.shift().split(" ");
  for (const word of wordsArr) {
    result.set(word, 0);
  }
  for (const word of arr) {
    if (result.has(word)) {
      result.set(word, result.get(word) + 1);
    }
  }
  let sorted = Array.from(result).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    }
  );
  for (let [key, value] of sorted) {
    console.log(key, "-", value);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
