function or(arr) {
  if (arr.length === 0) return false;

  const head = arr[0];
  const tail = arr.slice(1);
  return head || or(tail);
}

console.log(or([true, true, false]));
