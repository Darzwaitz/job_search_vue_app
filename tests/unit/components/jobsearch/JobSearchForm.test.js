import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/jobsearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("when user submitz form", () => {
    it("directz user to job resultz page with userz search parameterz", () => {
      const wrapper = mount(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      roleInput.setValue();
    });
  });
});
