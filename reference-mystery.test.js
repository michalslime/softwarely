const mysteries = require('./reference-mystery');
const alterObj = mysteries.alterObj;
const alterObj2 = mysteries.alterObj2;

test("mysteries 1", () => {
    const myObj = { a: 'initialValue' };

    alterObj(myObj);

    expect(
        myObj.a
    ).toBe('aDwa');
});

test("mysteries 1", () => {
    const myObj = { a: 'initialValue' };

    alterObj2(myObj);

    expect(
        myObj
    ).toBe(myObj);
});
