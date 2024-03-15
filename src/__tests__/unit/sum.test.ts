import { sum } from '../../utils/temps/sum';

describe('Testing out the unit test with sum function', () => {
  it('Should return sum of arguments 2 and 2 equals to 4', () => {
    const result = sum(2, 2);

    expect(result).toBeDefined();
    expect(result).toBe<number>(2 + 2);
  });
});
