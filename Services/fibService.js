const fibonacci = (amount) => {
  let numbers = [0, 1];

  if (!amount) amount = 20;

  if (!isNaN(amount)) {
    for (i = 2; i <= amount; i++) {
      numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers;
  }
};

module.exports = { fibonacci };
