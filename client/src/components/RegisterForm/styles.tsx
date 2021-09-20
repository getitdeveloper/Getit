import styled, { css } from 'styled-components';

// 공통 css
const Input = css`
  width: 100%;
  height: 4.4rem;
  padding-left: 0.5rem;
`;

const Pointer = css`
  cursor: pointer;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export const Logo = styled.div`
  text-align: center;
  margin: 3.1rem;
  a {
    font-size: 4rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.main};
  }

  img {
    height: 5.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5.9rem;
`;

export const Form = styled.form`
  width: 100vw;
  max-width: 45.7rem;
  padding: 0 1rem;
`;

export const DivideSection = styled.div`
  margin-bottom: 2.1rem;
`;

export const NicknameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NicknameInput = styled.input`
  ${Input}
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  width: 73%;
  padding-left: 1.5rem;
`;

export const DoubleCheckBtn = styled.input`
  ${Input}
  ${Pointer}
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 21px;
  background-color: #ffffff;
  color: ${(props) => props.theme.colors.main};
  font-size: 1.6rem;
  width: 25%;
`;

export const StyledLabel = styled.label`
  margin: 5.9rem 8.7rem 1.1rem 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const EmailInput = styled.input`
  ${Input}
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  padding-left: 1.5rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 0.15rem;
    bottom: 0.5rem;
    background-color: #ffffff;
    padding: 1.4rem;
    border-radius: 10px;
  }
`;

export const FieldSelect = styled.select`
  ${Input}
  ${Pointer}
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  appearance: none;
  padding-left: 1.5rem;
`;

export const StyldTextarea = styled.textarea`
  ${Input}
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  resize: none;
  height: 11rem;
  padding-top: 1rem;
  padding-left: 1.5rem;
`;

export const TextCount = styled.p`
  font-size: 1.4rem;
  padding-right: 1rem;
  float: right;
`;

export const SubmitBtn = styled.input`
  ${Pointer}
  height: 5.7rem;
  width: 100%;
  margin: 7.5rem 0 7.5rem;
  border-radius: 25px;
  border: none;
  background: ${(props) => props.theme.colors.main};
  color: #ffffff;
  font-size: 2rem;
  font-weight: 500;
  line-height: 0.55;
  letter-spacing: -0.5px;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  /* color: ${(props) => props.theme.colors.main}; */
  font-size: 1.6rem;
  padding: 0.5rem;
`;

export const ErrorMessageTextarea = styled.div`
  color: #ff0000;
  /* color: ${(props) => props.theme.colors.main}; */
  font-size: 1.6rem;
  padding: 0 0.5rem;
`;
