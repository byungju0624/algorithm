function reverseArr(arr) {
    if(arr.length === 0) return arr
    
    const head = arr[0]
    const tail = arr.slice(1)
    console.log(tail)
    return reverseArr(tail).concat(head)
    
    }
console.log(reverseArr([1,2,3,4]))   