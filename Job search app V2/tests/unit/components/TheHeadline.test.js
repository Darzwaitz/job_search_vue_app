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

  // it("swapz action verb after interval", () => {
  //   vi.useFakeTimers();
  //   render(TheHeadline);
  //   vi.advanceTimersToNextTimer();

  //   const actionPhrase = screen.getByRole("heading", {
  //     name: /create for everyone/i,
  //   });
  // });
});
