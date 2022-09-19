function pascalCaseSplitter(str) {
  let arr = [];
  let index = 1;
  let end = str.length;
  let cut = 0;

  while (index < end) {
    if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
      arr.push(str.slice(cut, str.length));
      cut = index;
    }
    index++;
  }
  arr.push(str.slice(cut, str.length));

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i - 1].replace(arr[i], "");
  }
  console.log(arr.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
