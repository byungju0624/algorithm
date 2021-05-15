function flattenArr(arr) {
    if(arr.length === 0) return [];
   
    const head = arr[0];
    const tail = arr.slice(1);
    if(Array.isArray(head)){ 
      return flattenArr([...head,...tail]);
      }
    else{
      return [head].concat(flattenArr(tail));
    }
   }
   let output = flattenArr([[1], 2, [3, 4], 5]);
   console.log(output); // --> [1, 2, 3, 4, 5]
   
  output = flattenArr([[2, [[3]]], 4, [[[5]]]])
   console.log(output); // --> [2, 3, 4, 5]

   output = flattenArr([[2, [[3]]], 4, [[[5]]]],[[[[6]]]])
   console.log(output); // --> [2, 3, 4, 5]