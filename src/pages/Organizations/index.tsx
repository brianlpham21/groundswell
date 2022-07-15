import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, NonProfit, PageContainer, OrganizationsList, Loader } from 'components';

const Organizations = () => {
  const [loading, setLoading] = useState(true);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState({
    name: '',
    type:  '',
    ein:  '',
    uri:  '',
    description: '',
  });

  useEffect(() => {
    axios.get(`https://gs.npkn.net/npo`)
      .then(res => {
        setOrganizations(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <PageContainer data-testid='org-1'>
      <Header title='Organizations' />
      <NonProfit info={selectedOrg} />
      {loading ? <Loader /> : <OrganizationsList organizations={organizations} setSelectedOrg={setSelectedOrg} selectedOrg={selectedOrg} />}
    </PageContainer>
  )
}

export default Organizations;