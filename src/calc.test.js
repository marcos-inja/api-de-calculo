const calculator = require('./calc');

test('Soma está ok!', () => {
  expect(calculator.soma(2, 2)).toBe(4);
});

test('Menos está ok!', () => {
    expect(calculator.sub(2, 2)).toBe(0);
});

test('Multiplicação está ok!', () => {
    expect(calculator.mult(3, 3)).toBe(9);
});

test('Divisão está ok!', () => {
    expect(calculator.div(2, 2)).toBe(1);
});

test('Potenciação está ok!', () => {
    expect(calculator.pot(2, 2)).toBe(4);
});

test('Raiz cúbica está ok!', () => {
    expect(calculator.raizCub(8)).toBe(2);
});

test('Raiz quadrada está ok!', () => {
    expect(calculator.raizQua(4)).toBe(2);
});
