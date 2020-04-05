const calcFactorization = (n) => {
    const s = Math.ceil(Math.sqrt(n));

    if (s * s == n) {
        return [s, s, 0, n];
    }
    let a, b;
    let x = s;
    let l = 0;
    let k = 0;
    let gotResult = false;

    while (!gotResult) {
        x += k;
        l = x * x - n;
        k++;
        if (x >= n) {
            return [n, 1, k, n];
        }
        if (Number.isInteger(Math.sqrt(l))) {
            let y = Math.sqrt(l);
            a = x + y;
            b = n / a;
            return [a, b, k, n];
        }
    }
};

export { calcFactorization };
