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
1 - 1
2 - 1
3 - 2
4 - 3
5 - 5
6 - 8
7 - 13
8 - 21
9 - 34

 */