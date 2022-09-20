import { mount } from "@vue/test-utils";
import TextInput from "@/components/shared";

describe("TextInput", () => {
  it("communicatez that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
  });
});
