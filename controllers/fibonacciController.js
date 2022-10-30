const { fibonacci } = require('../Services/fibService');

const calculateFinonacci = (req, res) => {
  const { amount } = req.query;

  try {
    const result = fibonacci(amount);
    if (!result)
      return res
        .status(500)
        .json({ ok: false, message: 'Se ingresó un valor incorrecto' });

    res.json({ ok: true, Fibonacci_Numbers: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Error inesperado');
  }
};

module.exports = calculateFinonacci;
