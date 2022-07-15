import styled from 'styled-components';
import { themes } from 'constants/themes';

const { breakpoints } = themes.main;

export const PageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  gap: 20px;
  min-height: 100%;
  margin: 0 auto;
  max-width: calc(100% - 48px);
  padding: 0 0 30px;
  width: 1312px;
  @media (max-width: ${breakpoints.med}) {
    max-width: calc(100% - 32px);
    width: 800px;
  }
  @media (max-width: ${breakpoints.small}) {
    gap: 24px;
    max-width: calc(100% - 24px);
    width: 640px;
  }
`;
