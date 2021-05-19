function firstCharacter(str) {
  if (str.length === 0) return "";

  let newStr = str.split(" ");
  let firstCh = "";
  for (let i = 0; i < newStr.length; i++) {
    firstCh = firstCh + newStr[i][0];
  }
  return firstCh;
}
let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"
