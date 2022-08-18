import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    // wrapper as title is used as convention in Vue because it is the wrapper or container
    const wrapper = mount(MainNav);
    // NB setData is async
    await wrapper.setData({
      company: "Super Corp",
    });
    expect(wrapper.text()).toMatch("Super Corp");
  });
});
