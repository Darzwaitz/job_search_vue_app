import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directz user to job resultz page with users search params", () => {
      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
    });
  });
});
