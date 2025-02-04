// Program 16: Check if a number is prime
let primeCandidate = 7;

let isPrime = true;
if (primeCandidate <= 1) {
 isPrime = false;
} else {
 for (let i = 2; i < primeCandidate; i++) {
 if (primeCandidate % i === 0) {
 isPrime = false;
 break;
 }
 }
}
if (isPrime) {
 console.log(primeCandidate + " is a prime number.");
} else {
 console.log(primeCandidate + " is not a prime number.");
}