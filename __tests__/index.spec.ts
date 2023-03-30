import { handler } from "../src/index";

//TODO: Implement tests for the handler
// Challenge: How to mock the telegraf instance?
describe("index", () => {
  it("should export a function", () => {
    expect(typeof handler).toBe("function");
  });
});
