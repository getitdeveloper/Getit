import styled from 'styled-components';

interface Size {
  width: string;
}

export const HorizontalLine = styled.hr`
  width: ${(props: Size) => props.width};
  border: 0.1px dashed #d2d2d2;
  border-style: none none dotted;
`;
