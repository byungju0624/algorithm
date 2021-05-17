function arrProduct(arr) {
  if (arr.length === 0) return 1;
  const head = arr[0];
  const tail = arr.slice(1);
  return head * arrProduct(tail);
}
console.log(arrProduct([1, -2, 1, 3]));
