import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordian from "@/components/Shared/CollapsibleAccordian.vue";

describe("CollapsibleAccordian", () => {
  it("renders child content", async () => {
    render(CollapsibleAccordian, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "My Category",
      },
      slots: {
        default: "<h3>My nested child</h3>",
      },
    });

    expect(screen.queryByText("My nested child")).not.toBeInTheDocument();
    const button = screen.getByRole("button", { name: /my category/i });
    await userEvent.click(button);
    expect(screen.getByText("My nested child")).toBeInTheDocument();
  });

  describe("when parent does not provide custom child content", () => {
    it("renders default content", async () => {
      render(CollapsibleAccordian, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        props: {
          header: "My Category",
        },
      });

      const button = screen.getByRole("button", { name: /my category/i });
      await userEvent.click(button);
      expect(screen.getByText("No content - default msg")).toBeInTheDocument();
    });
  });
});
