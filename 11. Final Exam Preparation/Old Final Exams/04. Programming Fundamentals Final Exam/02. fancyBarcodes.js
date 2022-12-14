function fancyBarcodes(input) {
  let n = Number(input.shift());
  let pattern = /(@#{1,})([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#{1,})/g;
  for (let i = 0; i < n; i++) {
    let barcode = input[i];
    let match = pattern.exec(barcode);
    let concatenateDigit = "";
    let isValid = false;
    while (match !== null) {
      isValid = true;
      let barcodeText = match[2];
      for (const ch of barcodeText) {
        if (!isNaN(Number(ch))) {
          concatenateDigit += ch;
        }
      }
      match = pattern.exec(barcode);
    }
    if (isValid) {
      concatenateDigit = concatenateDigit !== "" ? concatenateDigit : "00";
      console.log(`Product group: ${concatenateDigit}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
