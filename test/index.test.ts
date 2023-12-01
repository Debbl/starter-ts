import { assert, describe, it } from "vitest";
import { add } from "../src";

describe("add", () => {
  it("adds two numbers", () => {
    assert.equal(add(1, 2), 3);
  });
});
