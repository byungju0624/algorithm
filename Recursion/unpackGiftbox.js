function unpackGiftbox(giftBox, wish) {
  for (let i = 0; i < giftBox.length; i++) {
    //base
    if (giftBox[i] === wish) return true;
    else if (Array.isArray(giftBox[i])) {
      let result = unpackGiftbox(giftBox[i], wish);
      if (result === true) return true;
    }
  }

  return false;
}
const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true
