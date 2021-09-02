import * as React from 'react';
import { useHistory } from 'react-router-dom';
import MarkdownRenderer from '../MarkdownRenderer';
import { TitleForm, TextForm, FormButton, ButtonWrapper } from './styles';

function PostForm() {
  const history = useHistory();
  const [inputs, setInputs] = React.useState({
    title: '',
    text: '',
  });
  const [hidden, setHidden] = React.useState(false);
  const { title, text } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    const changedInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(changedInputs);
  };

  const onHidden = (status: boolean) => {
    setHidden(status);
  };

  return (
    <form>
      <TitleForm
        name='title'
        onChange={onChange}
        type='text'
        placeholder='제목'
        required
        value={title}
      />
      <button type='button' onClick={() => onHidden(false)}>
        작성하기
      </button>
      <button type='button' onClick={() => onHidden(true)}>
        미리보기
      </button>
      <TextForm
        name='text'
        onChange={onChange}
        placeholder='질문 내용을 작성해주세요'
        required
        value={text}
        hidden={hidden}
      />
      <MarkdownRenderer text={text} hidden={hidden} />
      <ButtonWrapper>
        <FormButton type='button' onClick={() => history.push('/')}>
          {' '}
          작성 취소{' '}
        </FormButton>
        <FormButton type='button' onClick={() => console.log(title, text)}>
          제출하기
        </FormButton>
      </ButtonWrapper>
    </form>
  );
}

export default PostForm;
