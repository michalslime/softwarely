const modFib = require("./modified-fibonacci");

test("1", () => {
    expect(modFib(0, 1, 3)).toBe(true);
});

test("2", () => {
    expect(modFib(0, 1, 6)).toBe(false);
});

test("3", () => {
    expect(modFib(5, 10, 25)).toBe(true);
});
