const analyzeArray = require("./analyze-array");

test(
        "Testing analysis on array: [78 -68 -50 -95 25 63 -21 79]",
        function() {
    let analysis = analyzeArray([78, -68, -50, -95, 25, 63, -21, 79]);

    expect(analysis.average).toBe(1.375);
    expect(analysis.length).toBe(8);
    expect(analysis.max).toBe(79);
    expect(analysis.min).toBe(-95);
});

test(
        "Testing analysis on array: [-59, 70, -36, -54, -10, 95, 67, 34, 10, -17, -4, 11, -46, -51]",
        function() {
    let analysis = analyzeArray([-59, 70, -36, -54, -10, 95, 67, 34, 10, -17, -4, 11, -46, -51]);

    expect(analysis.average).toBe(0.714286);
    expect(analysis.length).toBe(14);
    expect(analysis.max).toBe(95);
    expect(analysis.min).toBe(-59);
});

test(
        "Testing analysis on array: [24, -11, 91, 21, 7, -11, 93]",
        function() {
    let analysis = analyzeArray([24, -11, 91, 21, 7, -11, 93]);

    expect(analysis.average).toBe(30.571429);
    expect(analysis.length).toBe(7);
    expect(analysis.max).toBe(93);
    expect(analysis.min).toBe(-11);
});

test(
        "Testing analysis on array: [66, 24, -90, -28, 78, -25, -50, 100, 30, 54, 69]",
        function() {
    let analysis = analyzeArray([66, 24, -90, -28, 78, -25, -50, 100, 30, 54, 69]);

    expect(analysis.average).toBe(20.727273);
    expect(analysis.length).toBe(11);
    expect(analysis.max).toBe(100);
    expect(analysis.min).toBe(-90);
});

test(
        "Testing analysis on array: [-89, -80, -71, -70, 53, -13, 85, 61, 77, 57, 98, 51, -78, -26, -22]",
        function() {
    let analysis = analyzeArray([-89, -80, -71, -70, 53, -13, 85, 61, 77, 57, 98, 51, -78, -26, -22]);

    expect(analysis.average).toBe(2.2);
    expect(analysis.length).toBe(15);
    expect(analysis.max).toBe(98);
    expect(analysis.min).toBe(-89);
});
