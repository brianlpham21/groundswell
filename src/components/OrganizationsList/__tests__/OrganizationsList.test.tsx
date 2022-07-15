import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { OrganizationsList } from "../index";

test('renders Organizations List component', () => { 
  const orgs = [{
    name: 'Groundswell Giving',
    type: 'Philanthropy',
    ein: '128096621',
    uri: 'https://avatars.dicebear.com/api/bottts/20.png',
    description: 'Our organization',
  }];

  const selectedOrg = {
    name: '',
    type: '',
    ein: '',
    uri: '',
    description: '',
  };

  const mockFn = jest.fn();

  render(<BrowserRouter><OrganizationsList organizations={orgs} selectedOrg={selectedOrg} setSelectedOrg={mockFn} /></BrowserRouter>);

  const divElements = screen.getAllByRole("nonprofit");
  expect(divElements[0]).toHaveTextContent("Groundswell Giving");
})