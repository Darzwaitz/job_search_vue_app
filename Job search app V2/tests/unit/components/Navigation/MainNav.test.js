import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const $route = {
    name: "Home",
  };

  const renderMainNav = () => {
    render(MainNav, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          FontAwesomeIcon: true,
          // RouterLinkStub here is a stand-in component coming from test-utils, and is the preferred method
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Company Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();

    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );

    expect(navigationMenuTexts).toEqual([
      "Teamz",
      "Locationz",
      "Life @ here",
      "How we hire",
      "Studentz",
      "Jobz",
    ]);
  });

  describe("when the user", () => {
    it("displayz user profile picture", async () => {
      renderMainNav();

      let profileImage = screen.queryByRole("img", {
        name: /Profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /Profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
