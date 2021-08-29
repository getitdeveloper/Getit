import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: '#f5f5f5',
    },
  }),
);

export const PageContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 5%;
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    width: 80%;
  }
`;

export const ProfileLeft = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const ProfileRight = styled.div`
  width: 70%;
  height: auto;
  padding: 2%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  margin: 1% 0%;
  padding: 2%;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 70%;
  border-radius: 22px;
`;

export const InfoContainer = styled.div`
  height: 30%;
  width: 100%;
  padding: 5%;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 80%;
`;

export const SubTitle = styled.div`
  height: auto;
  weight: 100%;
  align-self: center;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const ProfileImage = styled.img`
  width: 30%;
  height: auto;
  align-self: center;
  margin-bottom: 15%;
`;

export const MainProfile = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  justify-content: space-between;
`;

export const ProfileNavItem = styled.button`
  align-self: flex-start;
  margin: 2% 0%;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;
