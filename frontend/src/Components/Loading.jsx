import React from 'react';
import styled, { keyframes } from 'styled-components';
import Alert from './Alert';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(540deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 10;
`;

const Spinner = styled.div`
  border: 16px solid #427697;
  border-top: 16px solid #6a8391;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite alternate-reverse;
`;

const Message = styled.h1`
  font-size: 20px;
  color: #2fbac4;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  z-index: 10;
`;

const Loading = () => (
  <>
    <Alert variant="loading" />
    <SpinnerContainer>
      <Spinner />
      <Message>Loading...</Message>
    </SpinnerContainer>
  </>
);

export default Loading;
