import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locatez element in list & returnz the next element in the list", () => {
    const list = ["A", "B", "C", "D"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });
});
