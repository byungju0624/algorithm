function solution(arr1, arr2) {
  return arr1.map((c, i) => arr2[i].map((e, j) => arr1[i][j] + arr2[i][j]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
