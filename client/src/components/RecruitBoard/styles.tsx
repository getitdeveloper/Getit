import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

export const Post = styled(Paper)`
  && {
    position: relative;
    margin: 0 auto;
    padding: 1.5rem;
    /* min-width: 300px; */
    width: 100%;
    height: 30rem;
    border-radius: 25px;
  }
  @media ${({ theme }) => theme.mobile} {
    && {
      width: 90%;
    }
  }
`;

export const RecruitBoardWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const GridWrapper = styled.div`
  max-width: 118rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 1rem;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const MemberTypeWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Title = styled.div`
  padding-top: 1.4rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.blackText};
  }
`;

export const RecruitCondition = styled.ul`
  list-style: none;
  margin-top: 1rem;
  font-size: 1.4rem;
  opacity: 0.55;
`;

export const Content = styled.div`
  height: 50%;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export const ContentDetail = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 0;
  padding: 2rem;
  height: auto;

  li {
    list-style: none;
    font-size: 1.5rem;
    display: inline-block;

    padding-right: 0.5rem;

    span {
      padding-right: 0.5rem;
    }
  }
`;

export const LikeIcon = styled(FavoriteBorderIcon)`
  vertical-align: middle;
`;
export const CommentIcon = styled(ChatBubbleOutlineIcon)`
  vertical-align: middle;
`;
