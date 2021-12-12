import styled from 'styled-components';

export const StyledRadioInput = styled.input`
  margin: 0 0.5rem 0.5rem 0.5rem;
  vertical-align: middle;
  appearance: none;
  border: 0.2rem solid gray;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &:checked {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.5rem;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
`;
