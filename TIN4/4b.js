function calculateFib(n) {
    switch(n){
      case 0: return 0;
      case 1: return 1;
      default: return calculateFib(n - 1) + calculateFib(n - 2);
    }
  }
  
  for (let i = 0; i <= 7; i++) {
    console.log(calculateFib(i));
  }