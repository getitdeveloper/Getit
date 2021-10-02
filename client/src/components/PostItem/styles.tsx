import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  padding: 0rem 1.5rem;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
`;

export const PostInfoButton = styled.button`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0;
  background-color: transparent;
  &: hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 0;
  }
`;

export const PostTitle = styled.h1`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
  text-align: left;
  font-size: 1.2rem;
`;

export const WriterButton = styled.button`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0;
  background-color: transparent;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const WriterImage = styled.img`
  width: 4rem;
  margin-bottom: 0.8rem;
  background-color: #dcdcdc;
  padding: 1rem;
  border-radius: 50%;
  @media ${(props) => props.theme.tablet} {
    width: 1.5rem;
    padding: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0rem;
  }
`;

export const WriterName = styled.p`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${(props) => props.theme.tablet} {
    font-size: 0.8rem;
    text-align: left;
  }
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-items: center;
  font-size: 1rem;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
  }
`;
export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MobileWriterDetailWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;
  }
`;
export const DetailInfo = styled.span`
  color: #868686;
  margin-left: 0.8rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
`;
