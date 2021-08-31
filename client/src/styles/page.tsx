import styled from 'styled-components';

interface Size {
  width?: string;
}

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

export const PageContainer = styled.div`
  width: ${(props: Size) => (props.width ? props.width : '100%')};
  height: auto;
  background-color: #ffffff;
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 5%;
  margin-bottom: 5%;
`;
