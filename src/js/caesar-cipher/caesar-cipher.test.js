const caesarCipher = require("./caesar-cipher");

test("(\"This is a string.\", 5) -> \"Ymnx nx f xywnsl.\"", function() {
    expect(caesarCipher("This is a string.", 5)).toBe("Ymnx nx f xywnsl.");
});

test("(\"Hello, world\", 30) -> ", function() {
    expect(caesarCipher("Hello, world", 30)).toBe("Lipps, asvph");
});

test("(\"Compiling...\", 0) -> Compiling", function() {
    expect(caesarCipher("Compiling...", 0)).toBe("Compiling...");
});

test("(\"aBcDeFgHiJkLmNoPqRsTuVwXyZ\", 100)", function() {
    expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 100))
        .toBe("wXyZaBcDeFgHiJkLmNoPqRsTuV");
});

test("\"01101000 01101001 00100001\", -10 -> 01101000 01101001 00100001",
        function() {
    expect(caesarCipher("01101000 01101001 00100001", -10))
        .toBe("01101000 01101001 00100001");
});

test("\"No!Change?\", -104", function() {
    expect(caesarCipher("No!Change?", -104)).toBe("No!Change?");
});

test("\"!\"£$%^&*()\", 15 -> \"!\"£$%^&*()\"", function() {
    expect(caesarCipher("!\"£$%^&*()\"")).toBe("!\"£$%^&*()\"");
});

test("\"\", -45", function() {
    expect(caesarCipher("", -45)).toBe("");
});
