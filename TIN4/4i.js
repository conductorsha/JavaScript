function amountToCoins(amount, coins) {
    let result = [];
    
        for(let i =0; i< coins.length;){
            if(amount == 0){
                break;
            }else{
                if(amount >= coins[i]){
                    amount-=coins[i];
                    result.push(coins[i]);
                }
                else{ i++; continue;}
            }
        }
    
    return result;
  }
  
  console.log(amountToCoins(400, [25, 10, 5, 2, 1]));