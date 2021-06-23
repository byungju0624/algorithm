function solution(arr) {
  var answer = 0;
  answer += arr.reduce((acc, cur) => acc + cur);
  return answer / arr.length;
}

console.log(solution([5, 5, 2, 1]));
