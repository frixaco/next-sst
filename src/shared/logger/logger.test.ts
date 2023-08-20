import { describe, expect, test } from "@jest/globals";

import { logger } from "./logger";

describe("logger", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("console output with source", () => {
    logger("test", "test");
    expect(consoleSpy).toHaveBeenCalledWith('%c>>> test: "test"', "color: red");
  });

  test("console output without source", () => {
    logger("test");
    expect(consoleSpy).toHaveBeenCalledWith(
      '%c>>> logger: "test"',
      "color: red"
    );
  });
});
