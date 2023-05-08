import { parseMessage } from "../src/parser";

describe("parseMessage", () => {
  it("should parse a message with a system", () => {
    expect(parseMessage("[system] content")).toEqual({
      content: "content",
      system: "system",
    });
  });
  it("should parse a message with a system without a space", () => {
    expect(parseMessage("[system]content")).toEqual({
      content: "content",
      system: "system",
    });
  });
  it("should parse a message without a system", () => {
    expect(parseMessage("content")).toEqual({
      content: "content",
    });
  });
  it("should parse an empty message", () => {
    expect(parseMessage("")).toEqual({
      content: "",
    });
  });
  it("should parse a message with only a space", () => {
    expect(parseMessage(" ")).toEqual({
      content: " ",
    });
  });
});
