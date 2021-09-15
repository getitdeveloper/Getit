import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

export const MessageImage = styled.img`
  width: 20rem;
`;

export const Message = styled.p`
  margin: 1rem 0rem;
  padding: 2rem;
  white-space: pre-line;
  font-weiht: bold;
  font-size: 1.5rem;
  color: white;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 12px;
`;
