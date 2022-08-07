const sum = (a, b) => a + b;

describe("1 + 2 = 3", function () {
  it("should pass", function () {
    expect(sum(1, 2)).toBe(3);
  });
});
