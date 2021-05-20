function take(num, arr) {
  let setArr = [arr[0]];
  if (num === 0 || arr.length === 0) return [];

  const tail = arr.slice(1);
  return setArr.concat(take(num - 1, tail));
}
console.log(take(5, [1, 2, 3, 4, 5, 6, 7, 8]));
