import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e4e4e4;
  width: 20%;
  padding: 2rem;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    border-right: none;
  }
`;

export const RightContainer = styled.div`
  width: 80%;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

export const ProfileMenuOption = styled.button`
  border-radius: 0.8rem;
  border: solid 1px #e8e8e8;
  background-color: transparent;
  padding: 1.2rem 0;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const ProfileSelectedMenu = styled(ProfileMenuOption)`
  color: #ffffff;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.main};

  &:hover {
    color: #ffffff;
  }
`;

export const ProfileRight = styled.div`
  width: 100%;
  height: auto;
  padding: 0rem 2.5rem;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

// MyProfile Info
export const MainProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  @media ${({ theme }) => theme.tablet} {
    display: initial;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;

  @media ${({ theme }) => theme.tablet} {
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin: 2rem 4rem;

  button {
    background-color: #ffffff;
    font-size: 1.4rem;
    border-radius: 12px;
    border-width: 2px;
    border-color: #efefef;
    border-style: solid;
    padding: 0.5rem 0rem;
    margin: 1rem 0rem;
    cursor: pointer;
    width: 5rem;
  }
`;

export const ProfileImage = styled.img`
  max-width: 15rem;
  width: 100%;
  background-color: #e0e0e0;
  padding: 4rem;
  border-radius: 12px;
`;

export const PersonalInfoWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const PersonalInfo = styled.div`
  width: 100%;
  div {
    display: flex;
    background-color: ${(props) => props.theme.colors.background};
    padding: 1.2rem;
    border-radius: 12px;
    margin: 0.8rem 0rem;
    width: 100%;
  }

  label {
    display: block;
    font-size: 1.4rem;
    border-right: 2px solid #bfbfbf;
    width: 5rem;
  }

  input {
    background-color: ${(props) => props.theme.colors.background};
    border-style: none;
    font-size: 1.4rem;
    padding-left: 1rem;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export const IntroWrapper = styled.textarea`
  width: 100%;
  min-height: 12rem;
  margin: 1.5rem 0rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  border-style: none;
  font-size: 1.4rem;
  word-break: break-all;
  resize: none;

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

export const Button = styled.button`
  border-radius: 6px;
  width: 14.6rem;
  height: 4.6rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-style: none;
  color: #ffffff;
`;

export const BoundaryText = styled.p`
  font-size: 1.4rem;
  line-height: 0.2rem;
`;
