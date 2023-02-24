import { hello } from "./hello-world";

describe("hello", () => {
  it("should return world", () => {
    const result = hello();

    expect(result).toBe("world");
  });
});
