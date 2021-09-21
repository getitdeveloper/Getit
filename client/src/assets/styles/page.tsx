import styled from 'styled-components';

interface Size {
  width?: string;
  padding?: string;
}

export const PageBackground = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2% 5%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.16);
    background-color: white;
    padding: 0;
  }
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
  padding: ${(props: Size) => (props.padding ? props.padding : '5%')};
  margin-bottom: 5%;
  margin-top: 2%;

  @media ${(props) => props.theme.mobile} {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    margin: 0;
    border-radius: 0;
    padding: 0;
  }
`;
