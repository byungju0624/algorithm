function solution(s) {
  return /^\d{4}$|^\d{6}$/.test(s) ? true : false;
}
console.log(solution("1e22"));
