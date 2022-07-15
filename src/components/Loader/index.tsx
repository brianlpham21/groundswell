import styled from 'styled-components';

export const Loader = () => {

  return (
    <LoaderIcon />
  );
};

const LoaderIcon = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #00d084;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;