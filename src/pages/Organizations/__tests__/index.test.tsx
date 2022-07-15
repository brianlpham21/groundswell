import { render, screen } from "@testing-library/react";
import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';
import Organizations from "../index";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Organizations />", () => {
  test("fetches organizations list", async () => {
    const organizations = [
      {
        name: 'Groundswell Giving',
        type: 'Philanthropy',
        ein: '128096621',
        uri: 'https://avatars.dicebear.com/api/bottts/20.png',
        description: 'Our organization',
      }
    ];

    mockedAxios.get.mockImplementationOnce(() => 
      Promise.resolve({ data: { organizations } })
    );

    // render(<BrowserRouter><Organizations /></BrowserRouter>); 
    
    const orgs = await screen.findByText('Groundswell');

    expect(orgs).toHaveLength(1);
  });
});