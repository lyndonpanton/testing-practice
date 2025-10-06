const reverseString = require("./reverse-string");

test("hello ->  olleh", function() {
    expect(reverseString("hello")).toMatch("olleh");
});

test("ThIs iS A StRiNg. -> .gNiRtS A Si sIhT", function() {
    expect(reverseString("ThIs iS A StRiNg.")).toMatch(".gNiRtS A Si sIhT");
});

test("abcdefghijklmNOPQRSTUVWXYZ -> ZYXWUVTSRQPONmlkjihgfedcba", function() {
    expect(reverseString("abcdefghijklmNOPQRSTUVWXYZ"))
            .toMatch("ZYXWUVTSRQPONmlkjihgfedcba");
});

test("x = (-b +|- sqrt(b^2 - 4ac)) / 2a -> a2 / ))ca4 - 2^b(trqs -|+ b-( = x",
        function() {
    expect(reverseString("x = (b^2 +|- sqrt(4ac) / c)"))
        .toMatch("a2 / ))ca4 - 2^b(trqs -|+ b-( = x");
});

test("\"\"", function() {
    expect(reverseString("\"\"")).toMatch("\"\"");
});
