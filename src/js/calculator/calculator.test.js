const calculator = require("./calculator");

test("addition", function() {
    expect(calculator.add(359, 126)).toBe(485);
    expect(calculator.add(-450, 818)).toBe(368);
    expect(calculator.add(472, -799)).toBe(-327);
    expect(calculator.add(-813, -39)).toBe(-852);
    expect(calculator.add(0, 0)).toBe(0);
});

test("subtraction", function() {
    expect(calculator.subtract(359, 126)).toBe(233);
    expect(calculator.subtract(-450, 818)).toBe(1268);
    expect(calculator.subtract(472, -799)).toBe(1271);
    expect(calculator.subtract(-813, -39)).toBe(852);
    expect(calculator.subtract(0, 0)).toBe(0);
});

test("multiplication", function() {
    expect(calculator.multiply(359, 126)).toBe(45234);
    expect(calculator.multiply(-450, 818)).toBe(-368100);
    expect(calculator.multiply(472, -799)).toBe(-377128);
    expect(calculator.multiply(-813, -39)).toBe(31707);
    expect(calculator.multiply(0, 0)).toBe(0);
});

test("division", function() {
    expect(calculator.add(360, 120)).toBe(3);
    expect(calculator.add(-450, 45)).toBe(-10);
    expect(calculator.add(471, -12)).toBe(-39.25);
    expect(calculator.add(-813, 6)).toBe(135.5);
    expect(calculator.add(0, 0)).toThrow(Error);
});
