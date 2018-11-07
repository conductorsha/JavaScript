
var factorialRec = function factorialRecursive(number){
    if(number == 1) return 1;
    else return number*factorialRec(number-1);
};
var factorialIter = factorialIteration(5);


console.log(factorialRec(5));
console.log(factorialIter);``



function factorialIteration(number){
    let result =1;
    for(k = number; k>0; k-- ){
        result*= k; 
    }
    return result;
}