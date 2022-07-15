
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Organizations from "../index";

test('renders Organizations component', async () => { 
  render(<BrowserRouter><Organizations /></BrowserRouter>);

  const divElement = screen.getByTestId("org-1");
  expect(divElement).toBeInTheDocument();
})