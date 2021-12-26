import styled from 'styled-components';

interface Size {
  width: string;
}

export const HorizontalLine = styled.div`
  width: ${(props: Size) => props.width};
  border-top: 0.01rem dashed #d2d2d2;
  border-style: none none line;
`;

export const Stack = styled.span`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1.5rem;
  padding: 0.6rem 1rem;
  margin: 0.3rem;
  display: flex;
  word-break: break-all;
  align-items: center;
  height: fit-content;
  font-size: 1.4rem;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
