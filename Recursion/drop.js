function drop(num, arr) {
  if (arr.length === 0 || num === 0) return arr;
  const tail = arr.slice(1);
  console.log(tail);
  return drop(num - 1, tail);
}
console.log(drop(5, [9, 1, 2, 7, 4, 7]));
