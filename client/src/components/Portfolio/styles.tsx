import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
  return {
    dialog: {
      display: 'flex',
      padding: '3rem 1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
});

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PortfolioContent = styled.div`
  margin-right: 1.5rem;
  width: 10rem;
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 4.5rem;
  background-color: #f5f5f5;
  border-radius: 1.2rem;
`;

export const PortfolioUrl = styled.a`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AddButton = styled.button`
  width: 10rem;
  height: 10rem;
  background-color: #f5f5f5;
  border-radius: 1.2rem;
  border: 0;
  cursor: pointer;
`;

export const PortfolioFieldWrapper = styled.div`
  display: flex;
`;

export const PortfolioInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.2rem;
  border-radius: 1rem;
  border: solid 1px #bcbcbc;
  background-color: #fff;
  margin: 0.8rem 0rem;
`;

export const SubmitPortfolioButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.colors.main}
  cursor: pointer;
`;
