import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/TheHeadline.vue";

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

  it("changez action verb at a consistent interval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    // replace setInterval global name with 'mock' - for this test
    vi.stubGlobal("setInterval", mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("swapz action verb after interval", async () => {
    vi.useFakeTimers();
    render(TheHeadline);
    // simulate passage of one step in timer
    vi.advanceTimersToNextTimer();

    await nextTick();
    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("removez interval when component disappearz", () => {
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);

    const { unmount } = render(TheHeadline);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});
