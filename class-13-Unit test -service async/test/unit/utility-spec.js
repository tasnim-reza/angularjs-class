describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

describe("Utility Service", function () {
    it("contains spec with an expectation", function () {
        var bar = new Foo('Reza');

        expect(bar.name).toBe('Reza');

        expect(bar.getCurrentDate().getFullYear()).toBe(new Date().getFullYear());
    });
});