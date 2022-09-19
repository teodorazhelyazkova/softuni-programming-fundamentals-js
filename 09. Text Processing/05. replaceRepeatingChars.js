function replaceRepeatingChars(str) {
  let index = 1;
  let end = str.length;
  let text = str[0];

  while (index < end) {
    if (str[index] !== str[index - 1]) {
      text += str[index];
    }
    index++;
  }
  console.log(text);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
