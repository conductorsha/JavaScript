console.log(reverseString("1010"));
console.log(reverseString("1111"))




function reverseString(number){
    let strArray = number.split("").reverse().join("");
   return number == strArray;
}