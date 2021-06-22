function solution(absolutes, signs) {
  let array = [];

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) array.push(-absolutes[i]);
    else {
      array.push(absolutes[i]);
    }
  }
  return array.reduce((acc, cur) => acc + cur);
}
