import styled from 'styled-components';

interface MaxWidth {
  maxWidth: string;
}

export const SearchBarForm = styled.form`
  max-width: ${(props: MaxWidth) => props.maxWidth};
  width: 100%;
  position: relative;
  border-radius: 23px;
  background-color: #f5f5f5;
  margin-left: 0;
  margin: 0 auto;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
    margin: 2.5rem 0;
  }

  input {
    width: 90%;
    background: transparent;
    border-style: none;
    height: 4rem;
    padding-left: 1.5rem;
    font-size: 1.5rem;
    outline-style: none;
  }
`;

export const SearchIconWrapper = styled.div`
  padding: 0 1.5rem;
  height: 100%;
  position: absolute;
  right: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
