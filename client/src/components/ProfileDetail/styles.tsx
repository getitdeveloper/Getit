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
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    width: 80%;
  }
`;

export const ProfileLeft = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const ProfileMenuOption = styled.button`
  border-radius: 0.8rem;
  border: solid 1px #e8e8e8;
  background-color: transparent;
  padding: 0.8rem;
  margin-bottom: 1.6rem;
  font-size: 0.8rem;
  cursor: pointer;
  &: hover {
    color: ${(props) => props.theme.colors.main};
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const ProfileSelectedMenu = styled(ProfileMenuOption)`
  color: white;
  background-color: ${(props) => props.theme.colors.main};
  &: hover {
    color: white;
  }
`;

export const VerticalLine = styled.div`
  width: 0.8rem;
  height: 65rem;
  border-right: solid 1px #e8e8e8;
  margin: 0rem 2rem;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const ProfileRight = styled.div`
  width: 80%;
  height: auto;
  padding: 0rem 2.5rem;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

// MyProfile styles

export const MainProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ProfileImage = styled.img`
  width: 12rem;
  height: auto;
  align-self: center;
  background-color: #e0e0e0;
  padding: 4rem;
  border-radius: 1rem;
`;

export const PersonalInfoWrapper = styled.div`
  width: 35rem;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 70%;
  border-radius: 22px;
`;

export const PersonalInfo = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  border: 0;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const IntroWrapper = styled.input`
  width: 100%;
  height: auto;
  min-height: 10rem;
  display: flex;
  align-items: center;

  margin: 1.5rem 0rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2rem;
  border: 0;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const SubTitleWrapper = styled.div`
  height: auto;
  weight: 100%;
  display: flex;
  justify-content: space-between;
  algin-items: center;
  margin: 2.5rem 0rem;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.main};
  border: 0;
  border-radius: 0.8rem;
  color: white;
  cursor: pointer;
`;

// MyComments styles
export const CommentWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #fbfbfb;
  border-radius: 0.8rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

export const CommentDetailWrapper = styled.div`
  width: 85%;
`;

export const CommentDate = styled.p`
  color: #818181;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;

export const CommentInfo = styled.div`
  width: 100%;
  display: flex;
  color: #818181;
  margin-bottom: 0.8rem;
`;

// MyPosts styles

export const PostWrapper = styled.button`
  width: 100%;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #fbfbfb;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 7px;
  margin-bottom: 3rem;
`;

export const TagWrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
`;

export const PostTitle = styled.p`
  width: 100%;
  margin-bottom: 0.4rem;
  padding: 0;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: left;
`;
