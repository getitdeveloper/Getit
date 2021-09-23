import styled from 'styled-components';

interface OpenHandler {
  open?: boolean;
}

export const TitleInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
  margin-bottom: 1rem;
  :focus {
    outline: none;
  }
`;

export const TextForm = styled.textarea`
  width: 100%;
  height: 30rem;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
  margin-bottom: 1rem;
  :focus {
    outline: none;
  }
`;

export const StacksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
  margin-bottom: 1rem;
`;

export const StackInput = styled.input`
  width: 35%;
  border: 0;
  :focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 0.6rem;
  :hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  color: ${(props) => props.theme.colors.whiteText};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 0.6rem;
  padding: 1% 3%;
  margin-left: 1%;
  border: 0;
`;

export const MarkdownWrapper = styled.div`
  display: ${(props: OpenHandler) => (props.open ? 'block' : 'none')};
  height: 30rem;
  width: 100%;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1.5% 1%;
  margin-bottom: 1.5%;
`;
