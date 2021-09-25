import styled from 'styled-components';

export const ReactionFieldWrapper = styled.div`
  weight: 100%;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const ReactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  margin: 0rem 1rem;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 50%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;
`;

export const LikeButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  margin: 0rem 1rem;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 50%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;
`;
