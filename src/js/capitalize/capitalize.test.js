const capitalize = require("./capitalize");

test("capitalize -> Capitalize", function() {
    expect(capitalize("capitalize")).toMatch("Capitalize");
});

test("\"\" -> \"\"", function() {
    expect(capitalize("")).toMatch("");
});

test("HeLlO -> Hello", function() {
    expect(capitalize("HeLlO")).toMatch("Hello");
});

test("12345 -> 12345", function() {
    expect(capitalize("12345")).toMatch("12345");
});

test("ThIs iS A StRiNg. -> This is a string.", function() {
    expect(capitalize("ThIs iS A StRiNg.")).toMatch("This is a string.");
});
