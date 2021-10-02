import styled from 'styled-components';

export const StacksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
`;

export const StackInputField = styled.input`
  width: 35%;
  border: 0;
  :focus {
    outline: none;
  }
  @media ${(props) => props.theme.tablet} {
    width: 50%;
    font-size: 0.8rem;
  }
`;

export const StackMessage = styled.p`
  margin-left: 0.8rem;
  margin-bottom: 1rem;
  color: #bcbcbc;
  font-size: 0.8rem;
`;

export const DeleteButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 0.6rem;
  :hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
`;
