import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  padding: 2% 5%;
`;

export const PageTitle = styled.p`
  width: 100%;
  font-stretch: normal;
  font-style: bold;
  text-align: left;
  color: #000;
`;

export const PageContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  display: flex;
  padding: 5%;
`;

export const ProfileLeft = styled.div`
  width: 30%;
  padding: 2%;
  display: flex;
  flex-direction: column;
`;

export const ProfileRight = styled.div`
  width: 60%;
  padding: 2%;
`;

export const ContentContainer = styled.div`
  margin: 1% 0%;
  padding: 2%;
  background-color: #f5f5f5;
  font-size: 80%;
  border-radius: 22px;
`;

export const TagContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const InfoContainer = styled.div`
  height: 30%;
  padding: 1%;
  background-color: #f5f5f5;
  font-size: 80%;
`;

export const SubTitle = styled.div`
height: auto;
weight: 100%
align-items: center;
font-size: 90%;
margin: 5% 0%;
`;
