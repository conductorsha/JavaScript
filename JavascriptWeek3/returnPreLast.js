
console.log(returnNubmers([1,5,4,2,6]));
function returnNubmers(numbers){
    numbers.sort();
   return [numbers[1], numbers[numbers.length-2]];

}
