
function generateRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999
  }

  function sumFunction(x) {
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return sum;
  }

  export {generateRandomNumber,sumFunction};