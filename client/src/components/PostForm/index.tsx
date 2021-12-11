import React, { useState, useCallback, ChangeEvent } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { COMMON_POST_REGISTER_REQUEST } from '@reducers/actions';
import MarkdownRenderer from '@components/MarkdownRenderer';
import StackInput from '@components/StackInput';
import { ContentContainer } from '@assets/styles/page';
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
  const history = useHistory();
  const dispatch = useDispatch();
  const boardType = history.location.state;
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.profileInfo?.user_pk);

  const [postTitle, setTitle] = useState('');
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(false);
  const [currentTab, setCurrentTab] = useState('edit');
  const [stacks, setStacks] = useState<Array<string>>([]);
  const [workers, setWorkers] = useState<Array<string>>([]);

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case 'postTitle':
        if (value.length >= 100) {
          return alert('제목은 100자까지 가능합니다.');
        }
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        break;
    }
  };

  const onHidden = useCallback(
    (status: boolean, e: any) => {
      const { id } = e.target;
      setCurrentTab(id);
      setHidden(status);
    },
    [currentTab, hidden],
  );

  const onHandleWorker = (e: any) => {
    const { value } = e.target;
    if (workers.includes(value)) {
      setWorkers(workers.filter((item) => item !== value));
    } else {
      setWorkers([...workers, value]);
    }
  };

  const onSubmit = useCallback(() => {
    if (postTitle === '' || text === '') {
      return alert('제목과 내용을 입력해주세요.');
    }
    if (workers.length === 0) {
      return alert('작성하시는 글과 연관된 직무를 선택해주세요.');
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

    dispatch({
      type: COMMON_POST_REGISTER_REQUEST,
      data: postData,
    });
    history.push(`/${boardType}Board`);
  }, [postTitle, text, workers, boardType, userId, stacks]);

  return (
    <ContentContainer>
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
        <TextFormTab
          id='edit'
          type='button'
          onClick={(e) => onHidden(false, e)}
        >
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

        <StackInput
          initialStacks={stacks}
          setInitialStacks={setStacks}
          placeHolder='관련 기술 스택을 입력하세요.'
        />

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
    </ContentContainer>
  );
}

export default PostForm;
