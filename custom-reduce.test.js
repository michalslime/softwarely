const customReduce = require('./custom-reduce');

test('customReduce 1', () => {
    expect(customReduce([1, 2, 3], (acc, next) => acc + next, 10)).toBe(16);
})

test('customReduce 2', () => {
    expect(customReduce([], (acc, next) => acc + next, 10)).toBe(10);
})
