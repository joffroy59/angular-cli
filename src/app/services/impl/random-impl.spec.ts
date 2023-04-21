import { RandomImpl } from "./random-impl";

describe("RandomImpl", () => {
  it("should create an instance", () => {
    expect(new RandomImpl(30)).toBeTruthy();
  });
});
