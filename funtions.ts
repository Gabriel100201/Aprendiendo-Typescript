const suma = (a: number, b: number) => {
  console.log(a + b);
};

const restar = ({ a, b }: { a: number; b: number }): number => {
  console.log(a - b);
  return a - b;
};

const mult = (numbers: { a: number; b: number }) => {
  const { a, b } = numbers;
  console.log(a - b);
};

// MAL
const sayHola = (fn: Function) => {
  fn("gabi");
};

// BIEN
const sayChau = (fn: (nombre: string) => string) => {
  fn("gabi");
};

sayHola((name: string) => {
  console.log("Hola " + name);
});
