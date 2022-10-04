import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/jobsearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("when user submitz form", () => {
    it("directz user to job resultz page with userz search parameterz", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Berlin");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue developer",
          location: "Berlin",
        },
      });
    });
  });
});
