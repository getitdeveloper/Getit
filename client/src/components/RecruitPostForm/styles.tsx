import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

export const RecruitPostFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 3rem 5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main};
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const BlockWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
`;

export const LeftContainer = styled.div`
  width: 20%;
  font-size: 1.5rem;
  font-weight: 500;
  font-stretch: normal;
`;

export const RightContainer = styled.div`
  width: 80%;

  ul {
    display: flex;
  }
`;

export const Period = styled.div`
  display: flex;
  div & :nth-child(2) {
    font-size: 1.6rem;
    margin: 0 2rem;
    display: flex;
    align-items: center;
  }
`;

export const SelectWrapper = styled.div`
  width: 35%;
  margin-right: 1rem;
`;

export const SelectImgWrapper = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background-color: #ffffff;
    padding: 1.4rem;
    border-radius: 10px;
  }
`;

export const FieldSelect = styled.select`
  width: 100%;
  height: 4.4rem;
  padding-left: 0.5rem;
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  appearance: none;
  padding-left: 1.5rem;
  cursor: pointer;
`;

export const AddProjectIcon = styled(AddIcon)`
  background-color: ${({ theme }) => theme.colors.main};
  color: #ffffff;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

// TODO 공통으로 빼기?
export const Stacks = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  /* margin-bottom: 1.4rem; */

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    margin-right: 1rem;
    border-radius: 12px;
    width: fit-content;
    height: 44px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const DatePicker = styled.input`
  width: 242px;
  height: 5rem;
  border-radius: 12px;
  padding: 1rem;
  border: solid 1px #bcbcbc;
  text-align: center;
  font-size: 1.6rem;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  input {
    margin: 1rem;
    appearance: none;
    border: 3px double gray;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    &:checked {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const CountMember = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  input {
    width: 70%;
    margin-right: 0.5rem;
    height: 4rem;
    border-radius: 12px;
    border: 1px solid #bcbcbc;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 6px;
  width: 14.6rem;
  height: 4.6rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-style: none;
  color: #ffffff;
`;
