import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

it("renders learn react link", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
