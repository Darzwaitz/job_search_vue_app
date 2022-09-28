import { mount } from "@vue/test-utils";
import Subnav from "@/components/navigation/Subnav";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        // $route: $route
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user iz on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("When user iz not on job page", () => {
    it("does NOT display job count", () => {
      const routeName = "Homw";

      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
