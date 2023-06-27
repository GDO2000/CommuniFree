import SignIn from "../../communifree/pages/index";


const { test } = require("node:test");
const SignIn = require ("../../communifree/pages/index");
const { createClient } = require("@supabase/supabase-js");

// Mock the Supabase client
jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(),
}));

test("fake login details that do not allow you to log in", () => {
  // Mock the response of Supabase client's signIn method
  const mockSignIn = jest.fn().mockResolvedValue({
    error: "Invalid credentials",
  });

  // Create a mocked Supabase client instance
  const mockClient = {
    auth: {
      signIn: mockSignIn,
    },
  };

  // Set up the mocked createClient function to return the mocked client
  createClient.mockReturnValue(mockClient);

  // Invoke the sign-in function that interacts with Supabase
  const result = signIn.signIn("fakeUser", "fakePass");

  // Verify the result
  expect(result).toBe("Invalid credentials");
});
