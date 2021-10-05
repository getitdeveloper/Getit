import styled, { css } from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const TextMinxin = css`
  border-radius: 12px;
  padding-left: 1rem;
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

export const RecruitPostDetailWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  padding-left: 1rem;
  margin-bottom: 0.6rem;
`;

export const ContainerWrapper = styled.div`
  max-width: 128rem;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  height: auto;
  padding: 3rem 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const Container = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e4e4e4;
  width: 20%;
`;

export const RightContainer = styled.div`
  width: 80%;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
`;

export const ImageBackground = styled.div`
  background-color: #e0e0e0;
  width: 9rem;
  height: 9rem;
  border-radius: 13px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
  }
`;

export const StudyName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const MemberTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  ul {
    display: flex;
  }
`;

export const ContentWrapper = styled.div`
  padding: 3rem;
`;

export const TitleText = styled.p`
  ${TextMinxin}
`;

export const ContentText = styled.p`
  ${TextMinxin}
  min-height: 10rem;
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
  }
`;
export const Period = styled.p`
  ${TextMinxin}
  padding-left: 1rem;
  width: 100%;
  height: auto;
`;

export const Stacks = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  margin-bottom: 1.4rem;

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    margin-right: 1rem;
    border-radius: 12px;
    width: fit-content;
    height: 44px;
  }
`;

export const JoinMember = styled.p`
  ${TextMinxin}
`;
