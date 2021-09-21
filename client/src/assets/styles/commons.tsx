import styled from 'styled-components';

interface Size {
  width: string;
}

export const HorizontalLine = styled.div`
  width: ${(props: Size) => props.width};
  border-top: 0.01rem dashed #d2d2d2;
  border-style: none none line;
`;
