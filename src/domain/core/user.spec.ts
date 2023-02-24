import { User } from "./user";

describe("User", () => {
  it("should update last login when logging in", () => {
    const initialDate = new Date();
    const user = new User(initialDate);

    user.login();

    expect(user.lastLogin).not.toBe(initialDate);
  });
});
