function transformFirstAndLast(arr) {
  if (arr.length === 0) return {};
  let result = {};
  result[arr[0]] = arr[arr.length - 1];
  return result;
}

let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Spacey"];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }
