import styled from 'styled-components';

export const CommentForm = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  justify-content: center;
  margin: 2rem 0 4rem 0;
`;

export const WriterImage = styled.img`
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentWriterImage = styled.img`
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const MobileWriterImage = styled.img`
  display: none;
  @media ${({ theme }) => theme.tablet} {
    background-color: #e0e0e0;
    width: 2rem;
    padding: 0.4rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CommentInput = styled.input`
  width: 80%;
  border-style: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 1.6rem;
  margin: 0 2rem;
  &:focus {
    outline: none;
  }
  @media ${({ theme }) => theme.tablet} {
    width: 75%;
    margin: 0 1.5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 70%;
    margin: 0 0.2rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.main};
  color: #ffffff;
  border-style: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  @media ${({ theme }) => theme.mobile} {
    padding: 0.4rem 1rem;
  }
`;

export const Comment = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  margin: 2rem 3.5rem;

  @media ${({ theme }) => theme.tablet} {
    margin: 2rem 2.5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    margin: 2rem 1.5rem;
  }
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 1.2rem;

  @media ${({ theme }) => theme.tablet} {
    margin: 1rem 1.2rem;
  }
`;

export const CommentDetail = styled.div``;

export const WriterNickName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const CreatedTime = styled.p`
  line-height: 2.08;
  font-size: 1.2rem;
  color: #ababab;
  margin-left: 1.2rem;
`;

export const CommentContent = styled.div`
  max-width: 900px;
  /* width: 100%; */
  width: fit-content;
  word-break: break-all;
  font-size: 1.4rem;
  margin: 0.4rem 1.2rem;
`;

export const NoComments = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 1.5rem;
  }
`;
