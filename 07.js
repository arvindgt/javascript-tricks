function fib(n) {
	if (n <= 1)
		return n;
	return fib(n-1) + fib(n - 2);
    /**
     * 5 + 4
     * (4 + 3) + (3 + 2)
     * ((3 + 2) + (2 + 1)) + ((2 + 1) + (1 + 0))
     * (((2 + 1) + (1 + 0)) + (((1 + 0) + (1))) + (((1 + 0) + 1) + (1))
     */
}

const res = fib(10);

console.log(res);

/**
input - result - difference - formula
1   -   1   -       0       - 
2   -   1   -       1       -   
3   -   2   -       1       -   
4   -   3   -       1       -   
5   -   5   -       0       -   
6   -   8   -       2       -   
7   -   13  -       6       -   
8   -   21  -       13      -   
9   -   34  -       25      -   
10  -   55  -       45      -   
 */