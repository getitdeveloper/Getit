import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';

export const WriteButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.main};
  color: #ffffff;
  border-radius: 25px;
  border-style: none;
  padding: 1rem 1.5rem;
  margin-left: 0.5rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.mobile} {
    margin-right: 0.5rem;
  }
`;

export const PostSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 118rem;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 2rem 1rem;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    padding: 1rem 0rem;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
`;

export const WritePostText = styled.span`
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export const WritePostIcon = styled(CreateIcon)`
  margin: 0 0 0 0.3rem;
  padding: 0;
`;
