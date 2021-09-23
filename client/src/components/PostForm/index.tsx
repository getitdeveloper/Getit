import * as React from 'react';
import { useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { COMMON_POST_REGISTER_REQUEST } from '@reducers/actions';
import MarkdownRenderer from '@components/MarkdownRenderer';
import { Stack } from '@assets/styles/commons';
import {
  StacksWrapper,
  TitleInput,
  TextForm,
  FormButton,
  ButtonWrapper,
  MarkdownWrapper,
  StackInput,
  DeleteButton,
} from './styles';

function PostForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardType = history.location.state;
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.id.user_pk);

  const initialStack: string[] = [];
  const [postTitle, setTitle] = useState('');
  const [text, setText] = useState('');
  const [stack, setStack] = useState('');
  const [hidden, setHidden] = useState(false);
  const [stacks, setStacks] = useState(initialStack);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'postTitle':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      case 'stack':
        setStack(value);
        break;
      default:
        break;
    }
  };

  const onHidden = (status: boolean) => {
    setHidden(status);
  };

  const onHandleAddStack = (e: any) => {
    if (e.key === 'Enter') {
      setStacks([...stacks, stack]);
      setStack('');
    }
  };

  const onDeleteStack = (currentStack: string) => {
    const filtered = stacks.filter((element) => element !== currentStack);
    setStacks(filtered);
  };
  const onSubmit = () => {
    if (postTitle === '' || text === '') {
      return alert('제목과 내용은 필수로 입력하셔야 합니다!');
    }
    const postData = {
      title: postTitle,
      category: boardType,
      content: text,
      user: userId,
      stack: stacks,
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
      <TitleInput
        name='postTitle'
        onChange={onChange}
        type='text'
        placeholder='제목'
        required
        value={postTitle}
      />
      <div>
        <span> 작성하시는 글과 연관된 직무를 선택해주세요! </span>
        <input type='checkbox' name='worker' value='개발자' /> 개발자
        <input type='checkbox' name='worker' value='디자이너' /> 디자이너
        <input type='checkbox' name='worker' value='기획자' /> 기획자
      </div>
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

      <StacksWrapper>
        {stacks.map((content: string) => (
          <Stack key={content}>
            {content}
            <DeleteButton type='button' onClick={() => onDeleteStack(content)}>
              <CloseIcon />
            </DeleteButton>
          </Stack>
        ))}
        <StackInput
          name='stack'
          onChange={onChange}
          value={stack}
          placeholder='관련 기술 스택을 입력하세요'
          onKeyPress={onHandleAddStack}
        />
      </StacksWrapper>

      <ButtonWrapper>
        <FormButton type='button' onClick={() => history.push('/')}>
          {' '}
          작성 취소{' '}
        </FormButton>
        <FormButton type='button' onClick={onSubmit}>
          제출하기
        </FormButton>
      </ButtonWrapper>
    </form>
  );
}

export default PostForm;
