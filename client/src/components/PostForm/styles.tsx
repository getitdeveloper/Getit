import styled from 'styled-components';

interface OpenHandler {
  open?: boolean;
}

export const TitleInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: solid 1px #bcbcbc;
  padding: 1.3rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;

  :focus {
    outline: none;
  }
`;

export const WorkerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    align-items: initial;
  }
`;

export const RadioButtonWrapper = styled.div`
  margin-top: 0.5rem;
`;

export const TextForm = styled.textarea`
  width: 100%;
  min-height: 45rem;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  resize: none;
  :focus {
    outline: none;
  }
  @media ${({ theme }) => theme.tablet} {
    min-height: 30rem;
  }
`;

export const TextFormTab = styled.button`
  margin-left: 1rem;
  border-style: none;
  border-radius: 10px 10px 0 0;
  padding: 0.6rem;
  background-color: ${(props: { defaultChecked: boolean }) =>
    props.defaultChecked ? '' : 'transparent'};
  font-size: 1.4rem;
  color: #bcbcbc;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.6rem;
  padding: 1.3rem 3rem;
  border: 0;
  margin: 0 0.5rem;
`;

export const MarkdownWrapper = styled.div`
  display: ${(props: OpenHandler) => (props.open ? 'block' : 'none')};
  min-height: 45rem;
  width: 100%;
  border-radius: 1.2rem;
  border: solid 1px #bcbcbc;
  padding: 1rem 0.8rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.tablet} {
    min-height: 30rem;
  }
`;

export const QuestionTypeNotification = styled.span`
  font-size: 1.5rem;
`;
