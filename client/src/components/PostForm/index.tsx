import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { COMMON_POST_REGISTER_REQUEST } from '@reducers/actions';
import MarkdownRenderer from '@components/MarkdownRenderer';
import StackInput from '@components/StackInput';
import RadioButton from '@components/RadioButton/index';
import { ContentContainer } from '@assets/styles/page';
import {
  TitleInput,
  TextForm,
  TextFormTab,
  FormButton,
  ButtonWrapper,
  MarkdownWrapper,
  WorkerWrapper,
  QuestionTypeNotification,
  RadioButtonWrapper,
} from './styles';

function PostForm(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const boardType = history.location.state;
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  const [postTitle, setTitle] = useState('');
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(false);
  const [currentTab, setCurrentTab] = useState('edit');
  const [stacks, setStacks] = useState<Array<string>>([]);
  const [workers, setWorkers] = useState<Array<string>>([]);
  const [questionType, setQuestionType] = useState([
    { text: '개발자', value: '개발자', checked: false },
    { text: '디자이너', value: '디자이너', checked: false },
    { text: '기획자', value: '기획자', checked: false },
  ]);

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

  const onHandleWorker = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      const { name } = e.target as HTMLInputElement;

      switch (name) {
        case '개발자': {
          setQuestionType([
            {
              text: '개발자',
              value: '개발자',
              checked: !questionType[0].checked,
            },
            questionType[1],
            questionType[2],
          ]);
          if (workers.includes(name)) {
            setWorkers(workers.filter((item) => item !== name));
          } else {
            setWorkers([...workers, name]);
          }
          break;
        }
        case '디자이너': {
          setQuestionType([
            questionType[0],
            {
              text: '디자이너',
              value: '디자이너',
              checked: !questionType[1].checked,
            },
            questionType[2],
          ]);
          if (workers.includes(name)) {
            setWorkers(workers.filter((item) => item !== name));
          } else {
            setWorkers([...workers, name]);
          }
          break;
        }
        case '기획자': {
          setQuestionType([
            questionType[0],
            questionType[1],
            {
              text: '기획자',
              value: '기획자',
              checked: !questionType[2].checked,
            },
          ]);
          if (workers.includes(name)) {
            setWorkers(workers.filter((item) => item !== name));
          } else {
            setWorkers([...workers, name]);
          }
          break;
        }
        default:
          console.log('empty select');
      }
    },
    [questionType],
  );

  const onSubmit = useCallback(() => {
    if (!userId) {
      return alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
    }
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
    // console.log(postData);

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
          <QuestionTypeNotification>
            작성하시는 글과 연관된 직무를 선택해주세요.
          </QuestionTypeNotification>
          <RadioButtonWrapper>
            <RadioButton item={questionType} onClick={onHandleWorker} />
          </RadioButtonWrapper>
        </WorkerWrapper>
        <TextFormTab
          id='edit'
          type='button'
          onClick={(e) => onHidden(false, e)}
          defaultChecked={currentTab === 'edit'}
        >
          작성하기
        </TextFormTab>
        <TextFormTab
          id='preview'
          type='button'
          onClick={(e) => onHidden(true, e)}
          defaultChecked={currentTab === 'preview'}
        >
          미리보기
        </TextFormTab>
        <TextForm
          name='text'
          onChange={onChange}
          placeholder='질문 내용을 작성해주세요.'
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
            작성 취소
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
