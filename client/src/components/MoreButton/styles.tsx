import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 2rem;
  padding: 1rem 2.5rem;
  margin: 3rem 0rem;
  border-radius: 6px;
  border-style: none;
  background: ${({ theme }) => theme.colors.main};
  color: #ffffff;
`;
