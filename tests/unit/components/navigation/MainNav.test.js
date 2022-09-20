import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    // wrapper as title is used as convention in Vue because it is the wrapper or container
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    // [] within findAll, used as part of test utils
    const navigationMenuItemz = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    // console.log(navigationMenuItemz);
    const navigationMenuTextz = navigationMenuItemz.map((item) => item.text());
    // console.log(navigationMenuTextz);
    expect(navigationMenuTextz).toEqual([
      "Teamz",
      "Life at company",
      "How we hire",
      "Studentz",
      "Jobz",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts the user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displayz subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});