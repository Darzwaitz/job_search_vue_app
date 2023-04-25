import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("keepz track of loggin state of user", () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });
});

describe("loginUser", () => {
  it("logz the user in", () => {
    const store = useUserStore();
    store.loginUser();
    expect(store.isLoggedIn).toBe(true);
  });
});
