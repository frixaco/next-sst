import { describe, expect, test } from "@jest/globals";

import { cn } from "../utils";

describe("cn", () => {
  test("tailwind classes merge", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });
});
