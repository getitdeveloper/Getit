import styled from 'styled-components';

export const CommentForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 4rem 0;
`;

export const WriterImage = styled.img`
  margin-right: 2rem;
  background-color: #e0e0e0;
  padding: 0.8rem;
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  width: 70%;
  border-style: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
  margin-right: 2rem;
`;

export const SubmitButton = styled.button`
  && {
    font-size: 1.4rem;
  }
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  border-style: none;
  padding: 0.4rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 1.5rem;
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
`;

export const CommentDetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentDetail = styled.div`
  height: 100%;
  display: flex;
`;

export const WriterNickName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const CreatedTime = styled.p`
  line-height: 2.08;
  font-size: 1.2rem;
  color: #ababab;
  margin-left: 2rem;
`;

export const CommentContent = styled.p`
  font-size: 1.4rem;
  padding: 0.4rem;
`;

export const NoComments = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 1.5rem;
  }
`;
