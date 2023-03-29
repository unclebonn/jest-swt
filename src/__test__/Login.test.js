import {
    fireEvent,
    render,
    screen,
  } from "@testing-library/react";
  import Login from "../components/Login";
  import "@testing-library/jest-dom/extend-expect";
  
  // simulate call api success
  jest.mock("axios", () => ({
    __esModule: true,
  
    // return by default
    default: {
      post: () => {
        return {
          data: { _id: 1, fullname: "somebody", email: 'test@ahihii.com', gender: 'testgender', phone: '0123456789' },
          status: 200
        }
      },
    },
  }));
  
  
  // Test Component
  
  describe("group email form", () => {
    // 1. label email
    test("should render the email label text", () => {
      render(<Login />);
      const labelEmailEl = screen.getByLabelText(/email address/i);
      expect(labelEmailEl).toBeInTheDocument();
    });
  
    // 2. placeholder
    test("email input placeholder should be rendered", () => {
      render(<Login />);
      const emailElement = screen.getByPlaceholderText(/enter email/i);
      expect(emailElement).toBeInTheDocument();
    });
  });
  
  describe("group password form", () => {
    // 11. label password
    test("should render the password label text", () => {
      render(<Login />);
      const labelPasswordEl = screen.getByLabelText(/password/i);
      expect(labelPasswordEl).toBeInTheDocument();
    });
  
    // 3. placeholder
    test("password input placeholder should be rendered", () => {
      render(<Login />);
      const passwordInputEl = screen.getByPlaceholderText(/password/i);
      expect(passwordInputEl).toBeInTheDocument();
    });
  });
  
  describe("checkbox remember me", () => {
    // 4. label Remember me
    test("Checkbox should be rendered with the correct label", () => {
      render(<Login />);
      const checkboxEl = screen.getByRole("checkbox");
      const labelEl = screen.getByLabelText("Remember me");
      expect(checkboxEl).toBeInTheDocument();
      expect(labelEl).toBeInTheDocument();
    });
  });
  
  // 5. button
  test("button should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
  
  describe("group onchange value", () => {
    // 8 verify that the component responds correctly
    test("email input should update correctly", () => {
      render(<Login />);
      const emailInputEl = screen.getByPlaceholderText(/enter email/i);
      const testValue = "vuanhlam000@gmail.com";
  
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
  });
  
  describe('first mounted should be empty', () => {
    // 6. first mounted
    test("email input should be empty", () => {
      render(<Login />);
      const usernameInputEl = screen.getByPlaceholderText(/enter email/i);
      expect(usernameInputEl.value).toBe("");
    });
    
    // 7. onChange password
    test("password input should be empty", () => {
      render(<Login />);
      const passwordInputEl = screen.getByPlaceholderText(/password/i);
      expect(passwordInputEl.value).toBe("");
    });
  
  })
  
  
  // ------------------------- Test API --------------------------------
  
  
  describe("Login API", () => {
  
    test("displays user name after successful API call", async () => {
      render(<Login />);
      const email = screen.getByPlaceholderText(/enter email/i);
      const password = screen.getByPlaceholderText(/password/i);
      const button = screen.getByRole("button");
    
      fireEvent.change(email, { target: { value: "test@example.com" } });
      fireEvent.change(password, { target: { value: "password123" } });
      fireEvent.click(button);
  
      const name = await screen.findByText("somebody");
      const emailValue = await screen.findByText("test@ahihii.com");
      const gender = await screen.findByText("testgender");
      const phone = await screen.findByText("0123456789");
      expect(name).toBeInTheDocument();
      expect(emailValue).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      expect(phone).toBeInTheDocument();
    });
  
  
    test("displays status code after successful API call", async () => {
      render(<Login />);
      const email = screen.getByPlaceholderText(/enter email/i);
      const password = screen.getByPlaceholderText(/password/i);
      const button = screen.getByRole("button");
    
      fireEvent.change(email, { target: { value: "test@example.com" } });
      fireEvent.change(password, { target: { value: "password123" } });
      fireEvent.click(button);
  
      const status = await screen.findByText("200");
      expect(status).toBeInTheDocument();
    });
  
  });
  