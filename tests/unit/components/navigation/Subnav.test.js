import { mount } from "@vue/test-utils";
import Subnav from "@/components/navigation/Subnav";

describe("Subnav", () => {
  describe("When user iz on job page", () => {
    it("displays job count", () => {
      const $route = {
        name: "JobResults",
      };

      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            // $route: $route
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("When user iz not on job page", () => {
    it("does NOT display job count", () => {
      const $route = {
        name: "Home",
      };
      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            // $route: $route
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
