import styled from 'styled-components';

export const PageBackground = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2% 5%;
`;

export const PageTitle = styled.p`
  width: 75%;
  font-stretch: normal;
  font-style: bold;
  text-align: left;
  color: ${(props) => props.theme.colors.blackText};
`;
