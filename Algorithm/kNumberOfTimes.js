function solution(array, commands) {
  let result = [];
  let command;
  for (let i = 0; i < commands.length; i++) {
    command = commands[i];
    let firstIndex = command[0] - 1;
    let lastIndex = command[1];
    let number = array.slice(firstIndex, lastIndex).sort((a, b) => a - b);
    result.push(number[command[2] - 1]);
  }
  return result;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
