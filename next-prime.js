// https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript
let primes = [2, 3];

const isPrime = (n) => {
  const sqrtN = Math.sqrt(n);
  let primeIndex = 0;
  let nextPrimeOne = primes[primeIndex];
  while (nextPrimeOne <= sqrtN) {
    if (n % nextPrimeOne === 0) {
      return false;
    }
    primeIndex++;
    if (primeIndex === primes.length) {
      primes.push(nextPrime(nextPrimeOne));
    }
    nextPrimeOne = primes[primeIndex];
  }

  return true;
};

const nextPrime = (n) => {
  if (n === 0 || n === 1) {
    return 2;
  }
  if (n === 2) {
    return 3;
  }

  let current = n + 2;
  if (current % 2 === 0) {
    current++;
  }

  while (!isPrime(current)) {
    current += 2;

    while (current % 3 === 0 || current % 5 === 0) {
      current += 2;
    }
  }
  return current;
};

// console.log(nextPrime(13));
console.log(nextPrime(49));
// console.log(nextPrime(1761471253533));
