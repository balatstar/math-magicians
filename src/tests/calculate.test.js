import calculate from "../logic/calculate";

test('AC to reset', () => {
  const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
  expect(result).toEqual({ total: null, next: null, operation: null });
});

