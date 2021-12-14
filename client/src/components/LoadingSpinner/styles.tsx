import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const CircularProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  height: 100vh;
`;

export const MessageImage = styled.img`
  width: 20rem;
`;

export const Message = styled.p`
  margin: 1rem 0rem;
  padding: 2rem;
  white-space: pre-line;
  font-weiht: bold;
  font-size: 1.5rem;
  color: white;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 12px;
`;
