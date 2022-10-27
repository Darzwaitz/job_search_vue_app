import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";

import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = (store) => ({
    global: {
      plugins: [store],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const store = createStore();
    // wrapper as title is used as convention in Vue because it is the wrapper or container
    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Careers");
  });

  it("displays menu items for navigation", () => {
    const store = createStore();

    // [] within findAll, used as part of test utils
    const wrapper = shallowMount(MainNav, createConfig(store));

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
      const store = createStore();

      const wrapper = shallowMount(MainNav, createConfig(store));

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", async () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displayz subnavigation menu with additional information", async () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));

      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });

  describe("when users is logged out", () => {
    it("issuez call to vuex to login user", () => {});
  });
});
