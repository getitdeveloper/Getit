import styled from 'styled-components';

interface OpenHander {
  open?: boolean;
}

export const TitleForm = styled.input`
  display: block;
  width: 100%;
  border-radius: 12px;
  border: solid 1px #bcbcbc;
  padding: 1.5% 1%;
  margin-bottom: 1.5%;
`;

export const TextForm = styled.textarea`
  width: 100%;
  height: 30rem;
  border-radius: 12px;
  border: solid 1px #bcbcbc;
  padding: 1.5% 1%;
  margin-bottom: 1.5%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  color: ${(props) => props.theme.colors.whiteText};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 6px;
  padding: 1% 3%;
  margin-left: 1%;
`;

export const MarkdownWrapper = styled.div`
  display: ${(props: OpenHander) => (props.open ? 'block' : 'none')};
  height: 30rem;
  width: 100%;
  border-radius: 12px;
  border: solid 1px #bcbcbc;
  padding: 1.5% 1%;
  margin-bottom: 1.5%;
`;
