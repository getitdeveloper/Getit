import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { COMMON_POST_REGISTER_REQUEST } from '@reducers/actions';
import MarkdownRenderer from '@components/MarkdownRenderer';
import {
  TitleForm,
  TextForm,
  FormButton,
  ButtonWrapper,
  MarkdownWrapper,
} from './styles';

function PostForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardType = history.location.state;
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.id.user_pk);
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

  const onSubmit = (postTitle: string, postContent: string) => {
    console.log(user);
    const postData = {
      title: postTitle,
      category: boardType,
      content: postContent,
      user: userId,
      stack: ['1', '123123', 'apple', 'banana'], // stack 작성하기?!!
      worker: '개발자',
    };
    console.log(postData);
    try {
      dispatch({
        type: COMMON_POST_REGISTER_REQUEST,
        data: postData,
      });
      history.push(`/${boardType}Board`);
    } catch (error) {
      console.log(error);
    }
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
      <MarkdownWrapper open={hidden}>
        <MarkdownRenderer text={text} open={hidden} />
      </MarkdownWrapper>

      <ButtonWrapper>
        <FormButton type='button' onClick={() => history.push('/')}>
          {' '}
          작성 취소{' '}
        </FormButton>
        <FormButton type='button' onClick={() => onSubmit(title, text)}>
          제출하기
        </FormButton>
      </ButtonWrapper>
    </form>
  );
}

export default PostForm;
