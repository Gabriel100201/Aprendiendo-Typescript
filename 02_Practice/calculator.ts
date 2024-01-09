//Declaracón de tipos de operadores
type operations = "+" | "-" | "*" | "/";

const sumar = (numbers: { num1: number; num2: number }): number => {
  const { num1, num2 } = numbers;
  return num1 + num2;
};

const restar = (numbers: { num1: number; num2: number }): number => {
  const { num1, num2 } = numbers;
  return num1 - num2;
};

const multiplicar = (numbers: { num1: number; num2: number }): number => {
  const { num1, num2 } = numbers;
  return num1 * num2;
};

const dividir = (numbers: { num1: number; num2: number }): number => {
  const { num1, num2 } = numbers;
  return num1 / num2;
};

const calculator = (data: {
  operation: operations;
  num1: number;
  num2: number;
}) => {
  const { operation, num1, num2 } = data;
  switch (operation) {
    case "+":
      console.log(sumar({ num1, num2 }));
      break;
    case "-":
      console.log(restar({ num1, num2 }));
      break;
    case "*":
      console.log(multiplicar({ num1, num2 }));
      break;
    case "/":
      console.log(dividir({ num1, num2 }));
      break;
  }
};

calculator({ operation: "-", num1: 20, num2: 30 });
