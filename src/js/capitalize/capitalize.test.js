const capitalize = require("./capitalize");

test("capitalize", function() {
    expect(capitalize("capitalize")).toMatch("Capitalize");
});

test("", function() {
    expect(capitalize("")).toMatch("");
});

test("", function() {
    expect(capitalize("HeLlO")).toMatch("Hello");
});

test("", function() {
    expect(capitalize("12345")).toMatch("12345");
});

test("", function() {
    expect(capitalize("ThIs iS A StRiNg.")).toMatch("This is a string.");
});
