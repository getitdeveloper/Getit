import styled from 'styled-components';

interface Height {
  height?: string;
}

export const StacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: ${(props: Height) =>
    props.height === '' ? 'fit-content' : props.height};
  height: fit-content;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
  background-color: #ffffff;
`;

export const StackInputField = styled.input`
  width: 100%;
  border-style: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  height: fit-content;
  &:focus {
    outline: none;
  }
`;

export const StackMessage = styled.p`
  margin: 0.8rem 1rem;
  color: #bcbcbc;
  font-size: 1.2rem;
`;

export const DeleteButton = styled.button`
  margin-left: 0.5rem;
  border-style: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
`;
