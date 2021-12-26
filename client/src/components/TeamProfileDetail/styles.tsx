import styled, { css } from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const TextMinxin = css`
  border-radius: 12px;
  padding: 1rem;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 5rem;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  font-size: 1.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const HorizontalLine = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e4e4e4;
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0.5rem;
  border-radius: 50%;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
`;
export const MailIcon = styled(MailOutlineIcon)`
  color: #ffffff;
`;
export const LikeIcon = styled(FavoriteBorderIcon)`
  color: #ffffff;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  padding-left: 1rem;
  margin-bottom: 0.6rem;
`;

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

interface ImgUrl {
  studyProfile: string;
}

export const ImageContainer = styled.div`
  margin: 0 auto;
  width: 12rem;
  height: 12rem;
`;

export const StudyProfile = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 12rem;
  padding: none;
  border-radius: 15px;
`;

export const DefaultProfile = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4rem;
  }
`;

export const StudyName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const ContentWrapper = styled.div`
  padding: 3rem;
`;

export const TitleText = styled.p`
  ${TextMinxin}
  word-break: break-all;
`;

export const ContentText = styled.p`
  ${TextMinxin}
  min-height: 10rem;
  word-break: break-all;
`;

export const RecruitMember = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  margin-bottom: 1.4rem;

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1.5rem;
    margin-right: 1rem;
    border-radius: 12px;
    width: 167px;
    height: 44px;

    @media ${({ theme }) => theme.mobile} {
      width: 100%;
      margin: 0.5rem 0;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;
export const Period = styled.p`
  ${TextMinxin}
  padding: 0 2rem;
  width: fit-content;
  height: auto;
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const Stacks = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  margin-bottom: 1.4rem;
  flex-wrap: wrap;

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: 0.4rem 1rem 0.4rem 0rem;
    padding: 0 1.5rem;
    border-radius: 12px;
    width: fit-content;
    height: 44px;
  }
`;

export const JoinUsers = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  margin-bottom: 1.4rem;
  flex-wrap: wrap;

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: 0.4rem 1rem 0.4rem 0rem;
    padding: 0 1.5rem;
    border-radius: 12px;
    width: fit-content;
    height: 44px;
    @media ${({ theme }) => theme.mobile} {
      width: 100%;
      span {
        width: 70%;
        text-align: center;
      }
    }
    button {
      font-size: 1.6rem;
      margin-left: 1rem;
      padding: 0.3rem 0.8rem;
      border-radius: 10px;
      border: 1px double;
      cursor: pointer;

      @media ${({ theme }) => theme.mobile} {
        width: 30%;
      }
    }
  }
`;

export const Notification = styled.div`
  font-size: 1.6rem;
  margin: 2rem 1rem;
`;
