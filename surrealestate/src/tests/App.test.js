import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders Surreal Estate text", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Surreal Estate/i);
  expect(title).toBeInTheDocument();
});
