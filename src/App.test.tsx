import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

test('renders Organizations component', () => { 
  render(<BrowserRouter><App /></BrowserRouter>);

  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
})