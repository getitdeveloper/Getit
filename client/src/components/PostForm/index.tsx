import * as React from 'react';
import { useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { COMMON_POST_REGISTER_REQUEST } from '@reducers/actions';
import MarkdownRenderer from '@components/MarkdownRenderer';
import StackInput from '@components/StackInput';
import {
  TitleInput,
  TextForm,
  TextFormTab,
  FormButton,
  ButtonWrapper,
  MarkdownWrapper,
  WorkerWrapper,
} from './styles';

function PostForm(): JSX.Element {
  const initialStack: string[] = [];
  const initialWorker: string[] = [];
  const history = useHistory();
  const dispatch = useDispatch();
  const boardType = history.location.state;
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.profileInfo?.user_pk);

  const [postTitle, setTitle] = useState('');
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(false);
  const [currentTab, setCurrentTab] = useState('edit');
  const [stacks, setStacks] = useState(initialStack);
  const [workers, setWorkers] = useState(initialWorker);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'postTitle':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        break;
    }
  };

  const onHidden = (status: boolean, e: any) => {
    setCurrentTab(e.target.id);
    setHidden(status);
  };

  const onHandleWorker = (e: any) => {
    const { value } = e.target;
    if (workers.includes(value)) {
      setWorkers(workers.filter((item) => item !== value));
    } else {
      setWorkers([...workers, value]);
    }
  };

  const onSubmit = () => {
    if (postTitle === '' || text === '') {
      return alert('제목과 내용은 필수로 입력하셔야 합니다!');
    }
    if (workers.length === 0) {
      return alert('적어도 하나의 관련 직무를 선택해주세요!');
    }
    const postData = {
      title: postTitle,
      category: boardType,
      content: text,
      user: userId,
      stack: stacks,
      worker: workers,
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
      <WorkerWrapper>
        <span> 작성하시는 글과 연관된 직무를 선택해주세요! </span>
        <input
          type='checkbox'
          name='worker'
          value='개발자'
          onClick={onHandleWorker}
        />{' '}
        개발자
        <input
          type='checkbox'
          name='worker'
          value='디자이너'
          onClick={onHandleWorker}
        />{' '}
        디자이너
        <input
          type='checkbox'
          name='worker'
          value='기획자'
          onClick={onHandleWorker}
        />{' '}
        기획자
      </WorkerWrapper>
      <TextFormTab id='edit' type='button' onClick={(e) => onHidden(false, e)}>
        작성하기
      </TextFormTab>
      <TextFormTab
        id='preview'
        type='button'
        onClick={(e) => onHidden(true, e)}
      >
        미리보기
      </TextFormTab>
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

      <StackInput initialStacks={stacks} setInitialStacks={setStacks} />

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
