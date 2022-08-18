import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    // wrapper as title is used as convention in Vue because it is the wrapper or container
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Careers");
  });
});
