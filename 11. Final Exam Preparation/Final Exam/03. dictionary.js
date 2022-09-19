function dictionary(input) {
  let notebook = {};
  let wordsDef = input[0].split(" | ");
  let testWords = input[1].split(" | ");
  let command = input[2];

  for (const w of wordsDef) {
    let [word, definition] = w.split(": ");

    if (!notebook.hasOwnProperty(word)) {
      notebook[word] = [];
    }
    notebook[word].push(definition);
  }

  if (command === "Hand Over") {
    let result = "";
    for (const key of Object.keys(notebook)) {
      result += `${key} `;
    }
    console.log(result.trimEnd());
  } else {
    for (const w of testWords) {
      if (notebook.hasOwnProperty(w)) {
        console.log(`${w}:`);
        for (const def of notebook[w]) {
          console.log(` -${def}`);
        }
      }
    }
  }
}

dictionary([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
  "care | kitchen | flower",
  "Test",
]);
