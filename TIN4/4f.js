function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

  console.log(isPrime(2));
  console.log(isPrime(10));