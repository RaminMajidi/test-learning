import { describe, it, expect } from "vitest";
import { sum, isEven } from "./math";

describe("math utils", () => {
  it("should add two number correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
it("should return true for even numbers", () => {
  expect(isEven(4)).toBe(true);
});
it("should return false for odd numbers", () => {
  expect(isEven(5)).toBe(false);
});
