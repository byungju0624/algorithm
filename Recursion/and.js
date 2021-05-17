function and(arr) {
  if (arr.length === 0) return true;

  const head = arr[0];
  const tail = arr.slice(1);
  return head && and(tail);
}

console.log(and([true, true, false]));
