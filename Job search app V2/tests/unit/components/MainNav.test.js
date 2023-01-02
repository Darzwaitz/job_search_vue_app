import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    const companyName = screen.getByText("Job Searcher");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
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
      render(MainNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

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
