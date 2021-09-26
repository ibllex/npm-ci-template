import { sub, sum } from ".";

test('sum', () => {
    expect(sum(1, 1)).toBe(2);
});

test('sub', () => {
    expect(sub(1, 1)).toBe(0);
});
