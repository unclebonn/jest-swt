import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));


// 1.
test("email input placeholder should be rendered", () => {
  render(<Login />);
  const emailElement = screen.getByPlaceholderText(/enter email/i);
  expect(emailElement).toBeInTheDocument();
});

// 2.
test("password input placeholder should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

// 3. 
test("button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

// 4. first mounted
test("email input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/enter email/i);
  expect(usernameInputEl.value).toBe("");
});

// 5
test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

// 6
test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

// 8
test("email input should update correctly", () => {
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  const testValue = "test email simulated";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

// 9
test("password input should update correctly", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const typedValue = "test password simulated";

  // This function simulates a change event on the input field and updates its value to typedValue.
  fireEvent.change(passwordInputEl, { target: { value: typedValue } });
  expect(passwordInputEl.value).toBe(typedValue);
});


// 10
// test("user should be rendered after fetching", async () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);

//   const userItem = await screen.findByText("John");

//   expect(userItem).toBeInTheDocument();
// });
