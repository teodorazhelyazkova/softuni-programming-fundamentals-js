function oddOccurrences(str) {
  let result = new Map();

  let words = str.split(" ");

  for (let word of words) {
    word = word.toLowerCase();
    if (!result.has(word)) {
      result.set(word, 0);
    }
    result.set(word, result.get(word) + 1);
  }

  let filterResult = Array.from(result).filter(([key, value]) => {
    return value % 2 !== 0;
  });

  let buff = "";
  for (const [key, value] of filterResult) {
    buff += key + " ";
  }
  console.log(buff);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
