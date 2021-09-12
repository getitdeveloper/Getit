import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &: hover {
    background-color: ${(props) => props.theme.colors.background};
  }
  padding: 2%;
`;

export const TagWrapper = styled.div`
  margin-bottom: 1%;
  display: flex;
`;

export const WriterButton = styled.button`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostInfoButton = styled.button`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PostTitle = styled.p`
  padding: 0;
  margin: 0;
  width: 100%;
  font-stye: bold;
  font-size: small;
  text-align: left;
`;

export const PostText = styled.p`
  width: 100%;
  height: 2%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  marign-top: 3%;
`;

export const DetailInfo = styled.span`
  padding: 1%;
  color: #868686;
`;
