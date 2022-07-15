import React from 'react';
import styled from 'styled-components';

interface OrganizationListInfo {
  length: number;
  map: any;
}
interface OrganizationInfo {
  ein: string;
}
type OrganizationsListProps = {
  organizations: OrganizationListInfo;
  setSelectedOrg: any;
  selectedOrg: OrganizationInfo;
}

export const OrganizationsList = ({ organizations, setSelectedOrg, selectedOrg }: OrganizationsListProps) => {
  if (organizations.length === 0) { return <div>No Organizations Found.</div> }

  return (
    <div>
      {organizations.map((org) =>
          <OrgSelection className={selectedOrg.ein === org.ein && 'active'} key={org.ein} onClick={() => setSelectedOrg(org)}>{org.name}</OrgSelection>
        )}
    </div>
  )
}

const OrgSelection = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: block;
  margin-bottom: 12px;
  padding: 12px;
  width: 100%;
  -moz-box-shadow:    0 0 8px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  box-shadow:         0 0 8px rgba(0, 0, 0, 0.2);

  &.active {
    background-color: #00d084;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: white;
    font-weight: 900;
    -moz-box-shadow:    inset 0 0 10px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
    box-shadow:         inset 0 0 10px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: rgba(0, 208, 132, 0.8);
    color: white;
    cursor: pointer;
    opacity: 0.9;
    font-weight: 800;
  }
`;