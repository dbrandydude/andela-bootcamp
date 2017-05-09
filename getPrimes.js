"use strict";

const getPrimes = (n) => {
    let prime = [], primes = [];
    for (let counter = 2; counter <= n; ++counter) {
        if (!prime[counter]) {
            // if n is a prime number, add n to primes
            primes.push(counter);
            for (let i = counter << 1; i <= n; i += counter) {
                prime[i] = true;
            }
        }
    }
    return primes;
};
