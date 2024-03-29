import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };

  describe("when user is on jobs page", () => {
    it("displayz job count", () => {
      const routeName = "JobResults";
      renderTheSubnav(routeName);

      const jobCount = screen.getByText("1044");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobz page", () => {
    it("does NOT display job count", () => {
      const routeName = "Home";

      renderTheSubnav(routeName);

      const jobCount = screen.queryByText("1044");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
