let factorial = function factorial(n) {
    if (n < 2) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  function iterativeFactorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(6));
  console.log(factorial(5));