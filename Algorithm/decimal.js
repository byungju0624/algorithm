function solution(nums) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}
function isPrime(sum) {
  if (sum < 2) return true;
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return false;
  }
  return true;
}

console.log(solution([1, 2, 7, 6, 4]));
