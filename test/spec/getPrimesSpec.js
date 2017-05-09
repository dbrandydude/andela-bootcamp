describe("Prime Number Test", function() {
    it("should return `[ 2, 3, 5, 7, 11 ]` for `12`", function() {
        expect(getPrimes(12)).toEqual([ 2, 3, 5, 7, 11 ]);
    });
    it("should return `[ 2, 3, 5, 7, 11, 13, 17, 19 ]` for `20`", function() {
        expect(getPrimes(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
    });
    it("should return `[ 2, 3 ]` for `4`", function() {
        expect(getPrimes(4)).toEqual([ 2, 3 ]);
    });
    it("should return `[ 2, 3, 5, 7 ]` for `8`", function() {
        expect(getPrimes(8)).toEqual([ 2, 3, 5, 7 ]);
    });
    it("should return `[ 2, 3, 5, 7 ]` for `10`", function() {
        expect(getPrimes(10)).toEqual([ 2, 3, 5, 7 ]);
    });
    it("should return `[ 2, 3, 5, 7, 11 ]` for `11`", function() {
        expect(getPrimes(10)).toEqual([ 2, 3, 5, 7 ]);
    });
    it("should return `[ 2, 3, 5, 7 ]` for `7`", function() {
        expect(getPrimes(7)).toEqual([ 2, 3, 5, 7 ]);
    });
    it("should return `[ 2, 3, 5, 7, 11, 13, 17 ]` for `17`", function() {
        expect(getPrimes(17)).toEqual([ 2, 3, 5, 7, 11, 13, 17 ]);
    });
    it("should return `[ 2, 3, 5, 7, 11, 13 ]` for `13`", function() {
        expect(getPrimes(13)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
    });
    it("should return `[ 2, 3, 5, 7, 11, 13, 17, 19 ]` for `21`", function() {
        expect(getPrimes(13)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
    });
});