function solution(a, b, c) {
  let minimum = a;
  if (minimum < b) minimum;
  else minimum = b;
  if (minimum > c) minimum = c;
  return minimum;
}

console.log(solution(4, 5, 7));
