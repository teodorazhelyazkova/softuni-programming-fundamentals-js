function extractFile(str) {
  let fileInfo = str.split("\\");
  let fileName = fileInfo[fileInfo.length - 1].split(".");
  let extension = fileName.pop();
  
  fileName = fileName.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
