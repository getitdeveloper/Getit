import styled from 'styled-components';

interface Size {
  width: string;
}

export const HorizontalLine = styled.div`
  width: ${(props: Size) => props.width};
  border-top: 0.01rem dashed #d2d2d2;
  border-style: none none line;
`;

export const Stack = styled.div`
  max-width: 30rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1.5rem;
  padding: 0.6rem;
  margin-right: 0.6rem;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
`;
