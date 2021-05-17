function arrSum(arr) {
  if (arr.length === 0) return 0;
  const head = arr[0];
  const tail = arr.slice(1);
  return head + arrSum(tail);
}

console.log(arrSum([-1, -2, 1, 2, 3, 4, 5, 6]));
