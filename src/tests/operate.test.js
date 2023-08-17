import operate from '../logic/operate';

test('adds 5 + 3 to equal 8', () => {
  expect(operate('5', '3', '+')).toBe('8');
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(operate('5', '3', '-')).toBe('2');
});

test('multiplies 5 x 3 to equal 15', () => {
  expect(operate('5', '3', 'x')).toBe('15');
});

test('divides 6 ÷ 2 to equal 3', () => {
  expect(operate('6', '2', '÷')).toBe('3');
});

test('divides a number by 0 to give error message', () => {
  const result = operate('5', '0', '÷');
  expect(result).toBe("Can't divide by 0.");
});

test('modulus 5 % 3 to equal 2', () => {
  expect(operate('5', '3', '%')).toBe('2');
});
