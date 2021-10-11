import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TeamProfilePostFormWrapper = styled.form`
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

export const UploadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3.8rem;
`;

export const RegisterButton = styled.label`
  border: 1px solid #e0e0e0;
  border-radius: 13px;
  background-color: #ffffff;
  cursor: pointer;
  width: 7.5rem;
  padding: 0.6rem 0;
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  div {
    font-size: 1.6rem;
  }
  input {
    display: none;
  }
`;

export const CancelButton = styled.button`
  font-size: 1.6rem;
  border-radius: 13px;
  background-color: #ffffff;
  width: 7.5rem;
  padding: 0.6rem 0;
  border-style: none;
  border: 1px solid #e0e0e0e0;
  margin: 0.5rem;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
  /* align-self: center; */
  align-self: ${(props: { alt: string }) =>
    props.alt === 'team profile preview image' ? null : 'center'};
  background-color: #e0e0e0;
  /* padding: 4rem; */
  padding: ${(props: { alt: string }) =>
    props.alt === 'team profile preview image' ? null : '4rem'};
  border-radius: 1rem;
`;

export const NotificationText = styled.div`
  font-size: 1.4rem;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const StyeldTextArea = styled.textarea`
  width: 100%;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.5rem;
  border: 1px solid #bcbcbc;
`;

export const TextCount = styled.p`
  font-size: 1.4rem;
  padding-right: 1rem;
  float: right;
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

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.5rem;
  border: 1px solid #bcbcbc;
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

export const BoxContainer = styled.div`
  border: 1px solid #bcbcbc;
  height: 7rem;
  display: flex;
  align-items: center;
  border-radius: 1.2rem;
`;

export const UserContainer = styled.div`
  margin: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 1.7rem;

  img {
    width: 2rem;
  }
  span {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;
