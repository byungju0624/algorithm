function letterCapitalize(str) {
  if (str.length === 0) return "";
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > 0) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
    }
  }
  str = newStr.join(" ");
  return str;
}

let output1 = letterCapitalize("hello world");
console.log(output1); // "Hello World"
let output2 = letterCapitalize("javascript  is sexy ");
console.log(output2); // "Javascript  Is Sexy "
