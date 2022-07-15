import { useNavigate } from 'react-router-dom';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { Pages } from 'constants/routes';
import styled from 'styled-components';
import { themes } from 'constants/themes';

const { colors } = themes.main;

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const menuItems: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      onClick: () => navigate('/'),
    },
    {
      key: 'organizations',
      text: 'Organizations',
      onClick: () => navigate(Pages.Organizations),
    },
    {
      key: 'about',
      text: 'About',
      onClick: () => navigate(Pages.About),
    },
    {
      key: 'contact',
      text: 'Contact',
      onClick: () => navigate(Pages.Contact),
    },
  ];

  return (
    <StyledWrapper>
      <StyledTitle>
        {title && <h1>{title}</h1>}
        <CommandBar
          items={menuItems}
          ariaLabel="Main Menu"
          farItems={[]}
        />
      </StyledTitle>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  align-content: center;
  align-items: stretch;
  background: ${colors.white};
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  min-height: 48px;
  padding: 32px 0;
`;

const StyledTitle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 8px;
  width: 100%;
  h1 {
    margin-left: 8px;
    margin-right: 16px;
    max-width: 100%;
    span {
      font-weight: 600;
    }
  }
`;
