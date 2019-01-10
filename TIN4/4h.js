function secondMinAndMax(arr){
    arr = arr.sort(function(a, b) {return a-b});
    return [arr[1], arr[arr.length-2]];
}

console.log(secondMinAndMax([3, 4, 1, 6, 3, 22, 8, 9]));