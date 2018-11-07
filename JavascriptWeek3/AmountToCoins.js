
console.log(amountToCoins(50, [25, 10, 5, 2, 1]));

function amountToCoins(amount, coins){
    let i = 0;
    let coinstToReturn = [];
    while(amount!=0){
        if(amount-coins[i]>=0){
            coinstToReturn.push(coins[i]);
            amount-=coins[i];
        }
        else i++;
    }
    return coinstToReturn;
}