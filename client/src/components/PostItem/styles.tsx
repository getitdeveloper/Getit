import styled from 'styled-components';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding: 0rem 0.5rem;

  @media ${({ theme }) => theme.tablet} {
    padding: 0rem 1.5rem;
  }
`;

export const LeftContainer = styled.div`
  width: 85%;

  /* 모바일에서 보여지는 글자 수가 적어 너비 넓힘 */
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

export const PostInfoButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-style: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const PostTitle = styled.h1`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-bottom: 1.2rem;
  text-align: left;
  font-size: 1.6rem;
  @media ${({ theme }) => theme.tablet} {
    margin-left: 0.2rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const WriterInfo = styled.button`
  border-style: none;
  background-color: transparent;
`;

export const WriterInfoMobile = styled.button`
  display: none;
  @media ${({ theme }) => theme.tablet} {
    border-style: none;
    background-color: transparent;
    display: initial;
    display: flex;
    align-items: center;
  }
`;

export const WriterImage = styled.img`
  width: 4rem;
  margin-bottom: 0.8rem;
  background-color: #dcdcdc;
  padding: 1rem;
  border-radius: 50%;
  @media ${({ theme }) => theme.tablet} {
    width: 2rem;
    padding: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0rem;
  }
`;

export const WriterName = styled.p`
  font-size: 1.3rem;
`;

export const DetailWrapper = styled.div`
  width: 100%;
`;
export const PostDetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailInfo = styled.div`
  color: ${({ theme }) => theme.colors.iconBaseColor};
  margin-left: 0.4rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const LikesCount = styled.div`
  font-size: 1.4rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.iconBaseColor};
`;

export const Date = styled.p`
  font-size: 1.4rem;
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export const MobileDate = styled.p`
  display: none;
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.4rem;
  }
`;

export const StyledDateRangeIcon = styled(DateRangeIcon)`
  color: ${({ theme }) => theme.colors.iconBaseColor};
`;
export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  color: ${({ theme }) => theme.colors.iconBaseColor};
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${({ theme }) => theme.colors.iconBaseColor};
`;
export const StyledChatBubbleOutlineIcon = styled(ChatBubbleOutlineIcon)`
  color: ${({ theme }) => theme.colors.iconBaseColor};
`;
