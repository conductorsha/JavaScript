console.log(isPrime(19));

function isPrime(nubmer){
    for(k =2; k<nubmer; k++){
        if(nubmer%k === 0){
            return false;
        }
    }
    return true;
}