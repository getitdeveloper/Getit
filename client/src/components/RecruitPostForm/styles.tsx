import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

export const RecruitPostFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 3rem 5rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media ${({ theme }) => theme.tablet} {
    padding: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main};
  width: fit-content;
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;

  @media ${({ theme }) => theme.tablet} {
    div & :nth-child(2) {
      display: none;
    }
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  margin: 3rem 0;

  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 20%;
  font-size: 1.5rem;
  font-weight: 500;
  font-stretch: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    display: initial;
    flex-direction: initial;
    align-items: initial;
    justify-content: initial;
    margin-left: 0.5rem;
  }
`;

export const RightContainer = styled.div`
  width: 80%;
  margin: 1rem 0;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

export const Period = styled.div`
  display: inline-flex;
  div & :nth-child(2) {
    font-size: 1.6rem;
    margin: 0 2rem;
    display: inline-flex;
    align-items: center;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  width: 35%;
  margin-right: 1rem;

  @media ${({ theme }) => theme.tablet} {
    width: 95%;
  }

  /* @media ${({ theme }) => theme.mobile} {
    width: 90%;
  } */
`;

export const SelectImgWrapper = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    right: 0.1rem;
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
  @media ${({ theme }) => theme.tablet} {
    margin-right: 0rem;
    && {
      font-size: 2rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const Stacks = styled.ul`
  display: flex;
  min-height: 5rem;
  list-style: none;
  flex-wrap: wrap;

  li {
    background-color: #f5f5f5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    margin: 1rem;
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

export const TextCount = styled.p`
  font-size: 1.4rem;
  padding-right: 1rem;
  float: right;
`;

export const DatePicker = styled.input`
  width: 242px;
  height: 5rem;
  border-radius: 12px;
  padding: 1rem;
  border: solid 1px #bcbcbc;
  text-align: center;
  font-size: 1.6rem;
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

export const RecruitMemberWrapper = styled.ul`
  display: inline-flex;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  input {
    margin: 1rem 1rem 1rem 0.4rem;
    appearance: none;
    border: 0.2rem solid gray;
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
    width: 75%;
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

export const TitleWrapper = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.tablet} {
    display: flex;
    div {
      margin-right: 0.5rem;
    }
  }
`;
