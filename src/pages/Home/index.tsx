import React from 'react';
import { Header, NonProfit, PageContainer } from 'components';

const Home = () => {

  const exampleOrg = {
    name: 'Groundswell Giving',
    type: 'Philanthropy',
    ein: '128096621',
    uri: 'https://avatars.dicebear.com/api/bottts/20.png',
    description: 'Our organization',
  };

  return (
    <PageContainer>
      <Header title='Welcome' />
      <h3>Welcome to our Non Profit Registry</h3>
      <p>We include organizations such as the following:</p>
      <NonProfit info={exampleOrg} />
      <NonProfit info={exampleOrg} />
      <NonProfit info={exampleOrg} />
    </PageContainer>
  )
}

export default Home;
