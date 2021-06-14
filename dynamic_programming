// top down approach
function fibonacciMemoization(num, memo=[]){
    if(memo[num] !== undefined) return memo[num];
    if(num <= 2) return 1;
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    return memo[num];
}

// bottom up approach (better for space complexity)
function fibonacciTabulation(num){
    if(num <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= num; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[num];
}

function coinChange(coins, amount){
    var combinations = new Array(amount + 1).fill(0);
    combinations[0] = 1;
    for(let coin of coins){
        for(let i = 1; i < combinations.length; i++){
            if(combinations[i - coin] !== undefined) combinations[i] += combinations[i - coin];
            else combinations[i] += 0;
        }
    }
    return combinations[amount];
}

console.log(coinChange([1,2,5], 12));