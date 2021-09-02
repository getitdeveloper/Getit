import styled, { css } from 'styled-components';

const Input = css`
  width: 100%;
  height: 4.4rem;
  margin-bottom: 2.1rem;
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
  a {
    font-size: 4rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.main};
    margin-bottom: 2.1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmailInput = styled.input`
  ${Input}
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  /* margin-right: 1rem; */
  width: 75%;
`;

export const DoubleCheckBtn = styled.input`
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 21px;
  background-color: #ffffff;
  color: ${(props) => props.theme.colors.main};
  ${Input}
  font-size: 1.6rem;
  width: 25%;
`;

export const StyledLabel = styled.label`
  width: 8.6rem;
  height: 2.4rem;
  margin: 59px 87px 11px 8px;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const StyldInput = styled.input`
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  ${Input}
`;

export const FieldSelect = styled.select`
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  ${Input}
`;

export const StyldTextarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  font-size: 1.6rem;
  ${Input}
  resize: none;
  height: 10rem;
`;

export const SubmitBtn = styled.input`
  height: 5.7rem;
  margin: 7.5rem 0 0;
  /* padding: 1.2rem 19.38rem 1.6rem 19.12rem; */
  border-radius: 25px;
  border: none;
  background: ${(props) => props.theme.colors.main};
  color: #ffffff;
  font-size: 2rem;
  font-weight: 500;
  line-height: 0.55;
  letter-spacing: -0.5px;
`;
