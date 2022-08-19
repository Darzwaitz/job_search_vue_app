import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    // wrapper as title is used as convention in Vue because it is the wrapper or container
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItemz = wrapper.findAll("li");
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
});
