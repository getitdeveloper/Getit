import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { PageContainer } from '@assets/styles/page';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: '#f5f5f5',
    },
  }),
);

export const SplittedPageContainer = styled(PageContainer)`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
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
  width: 75%;
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

// MyComments styles
export const CommentWrapper = styled.div`
  margin-bottom: 3%;
  width: 100%;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #fbfbfb;
  border-radius: 7px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

export const CommentDetailWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

export const GoBoardButton = styled.button`
  width: 15%;
`;

// MyPosts styles

export const PostWrapper = styled.div`
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #fbfbfb;
  background-color: #fff;
  padding: 2%;
  border-radius: 7px;
`;
