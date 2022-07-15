import styled from 'styled-components';

interface OrganizationInfo {
  name: string;
  type:  string;
  ein:  string;
  uri:  string;
  description?: string;
}
type NonProfitProps = {
  info: OrganizationInfo
}

export const NonProfit = ({ info }: NonProfitProps) => {

  const { name, type, ein, uri, description } = info;

  return (
    <Organization key={ein}>
      <img src={uri} alt={name} />
      <OrganizationData>
        {name && ein ? <h3>{name} - {ein}</h3> : <h3>No Organization Selected.</h3>}
        {type && <h6>{type}</h6>}
        {description && <p>{description}</p>}
      </OrganizationData>
    </Organization>
  );
};

const Organization = styled.div`
  align-content: center;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #cecece;
  display: flex;
  justify-content: flex-start;
  min-height: 120px;
  padding: 20px;
  img {
    max-width: 120px;
  }
`;

const OrganizationData = styled.div`
  padding: 0 20px 20px;
`;
