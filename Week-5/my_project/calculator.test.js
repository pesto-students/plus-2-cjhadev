const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 2 + 4 return 6', () => {
        expect(mathOperations.sum(2,4)).toBe(6);
    });

    test('multiplying 2 * 2 return 4', () => {
        expect(mathOperations.product(2,2)).toBe(4);
    })

    test('subtracting 10 by 6 return 4', () => {
        expect(mathOperations.diff(10,6)).toBe(4);
    })
})