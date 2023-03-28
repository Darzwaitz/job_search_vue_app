import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  describe("when user is on jobs page", () => {
    it("displayz job count", () => {
      const $route = {
        name: "JobResults",
      };

      render(TheSubnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = screen.getByText("1044");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobz page", () => {
    it("does NOT display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = screen.queryByText("1044");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
