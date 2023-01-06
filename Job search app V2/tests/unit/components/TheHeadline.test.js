import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/TheHeadline.vue";

import { vi } from "vitest";

describe("TheHeadline", () => {
  it("displayz intro action verb", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });
});
