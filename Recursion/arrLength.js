function arrLength(arr) {
  if (arr.length === 0) return 0;
  const tail = arr.slice(1);
  console.log(tail);
  return 1 + arrLength(tail);
}

console.log(arrLength([2, 4, 5]));
