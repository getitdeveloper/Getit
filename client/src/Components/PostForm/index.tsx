import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TitleForm, TextForm, FormButton, ButtonWrapper } from './styles';

function PostForm() {
  const history = useHistory();
  const [inputs, setInputs] = React.useState({
    title: '',
    text: '',
  });
  const { title, text } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    const changedInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(changedInputs);
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
      <TextForm
        name='text'
        onChange={onChange}
        placeholder='질문 내용을 작성해주세요'
        required
        value={text}
      />
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
