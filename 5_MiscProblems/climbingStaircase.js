function climbStaircase(n) {
    let climbStairsWays = [0, 1, 2];

    for(let i = 3; i <= n; i++){
        climbStairsWays[i] = climbStairsWays[i - 1] + climbStairsWays[i - 2];
    }

    return climbStairsWays[n];
}

console.log(climbStaircase(3));
console.log(climbStaircase(4));
console.log(climbStaircase(5));
console.log(climbStaircase(6));

// Big O - O(n)