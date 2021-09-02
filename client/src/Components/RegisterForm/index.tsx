import * as React from 'react';
import { useState, useCallback } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import {
  RegisterWrapper,
  Title,
  FormWrapper,
  StyledLabel,
  Logo,
  EmailInput,
  StyldInput,
  DoubleCheckBtn,
  FieldSelect,
  StyldTextarea,
  SubmitBtn,
} from './styles';

function RegisterForm(): JSX.Element {
  const history = useHistory();
  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  const [nickname, setNickname] = useState('');
  const [field, setField] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [stacks, setStacks] = useState([]);

  // TODO 주석 복원하기!!
  // 기존 회원 또는 비회원 접근 방지 라우팅
  // React.useEffect(() => {
  //   if (message !== 'register') {
  //     return history.push('/');
  //   }
  // }, []);

  const handleSubmit = useCallback(() => {
    // 닉네임
    if (nickname.length < 6 || nickname.length >= 10) {
      return alert('닉네임은 6자 ~ 10자로 입력해야 합니다.');
    }
    // 분야
    if (field === '') {
      return alert('분야를 선택해주세요');
    }

    // 레벨
    if (level === '') {
      return alert('레벨을 선택해주세요');
    }

    // 이메일
    if (email === '') {
      return alert('이메일을 입력해주세요');
    }

    // 자기소개
    if (introduce === '') {
      return alert('자기소개를 입력해주세요');
    }
    // 사용 가능한 기술 스택
    if (stacks.length < 1) {
      return alert('사용 가능한 기술 스택을 입력해주세요');
    }

    const data = { nickname, field, level, email, introduce, stacks };

    console.log(data);

    // dispatch({
    //   type: SIGN_UP_REQUEST,
    //   data: { email, password, nickname },
    // });
  }, [nickname, field, level, email, introduce, stacks]);

  const handleChange = useCallback(
    (event) => {
      // console.log(event.target.name);
      console.log(event.target.value);
      const stacksArray = [...stacks];

      const selectInput = event.target.name;
      switch (selectInput) {
        case 'user-nickname':
          setNickname(event.target.value);
          console.log('닉네임을 입력했다');
          break;
        case 'user-field':
          setField(event.target.value);
          console.log('분야를 선택했다');
          break;
        case 'user-level':
          setLevel(event.target.value);
          console.log(event.target.value);
          console.log('레벨을 선택했다');
          break;
        case 'user-email':
          setEmail(event.target.value);
          console.log('이메일을 입력했다');
          break;

        case 'user-introduce':
          setIntroduce(event.target.value);
          console.log('자기소개를 입력했다');
          break;

        case 'user-stacks':
          // TODO 기술스텍 검색 라이브러리 찾아보기
          setStacks(event.target.value);
          console.log('사용 가능한 기술을 입력했다');
          break;

        default:
          return null;
      }
    },
    [nickname, field, level, email, introduce, stacks],
  );

  return (
    <RegisterWrapper>
      {/* <div style={{ width: '45.7rem' }}> */}
      <Logo>
        <Link to='/'>GetIt</Link>
      </Logo>

      <Title>회원가입</Title>

      <FormWrapper>
        {/* 닉네임(필수) */}
        <label htmlFor='user-nickname'>
          <StyledLabel>닉네임(필수)</StyledLabel>
          <div>
            <EmailInput
              type='text'
              name='user-nickname'
              placeholder='닉네임을 입력해주세요.'
              required
              onChange={handleChange}
              value={nickname}
            />
            <DoubleCheckBtn type='button' value='중복확인' />
          </div>
        </label>

        {/* 분야(필수) */}
        <label htmlFor='user-field'>
          <StyledLabel>분야(필수)</StyledLabel>
          <div>
            <FieldSelect
              name='user-field'
              form='myForm'
              required
              onChange={handleChange}
            >
              <option value='description' disabled selected>
                분야를 선택하세요.
              </option>
              <option value='developer'>개발자</option>
              <option value='designer'>디자이너</option>
              <option value='planner'>기획자</option>
            </FieldSelect>
          </div>
        </label>

        {/* 레벨(필수) */}
        <label htmlFor='user-level'>
          <StyledLabel>레벨(필수)</StyledLabel>
          <div>
            <FieldSelect
              name='user-level'
              form='myForm'
              required
              onChange={handleChange}
            >
              <option value='description' disabled selected>
                레벨을 선택해주세요.
              </option>
              <option value='코린이'>
                코린이: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
              </option>
              <option value='코등학생'>
                코등학생: 협업 경험이 없지만 API를 사용해 협업을 진행할수
                있습니다.
              </option>
              <option value='코대생'>
                코대생: 협업 경험이 있고 API를 자유자재로 다룰수 있습니다.
              </option>
              <option value='코드닌자'>
                코드닌자: 현재 실무에서 종사하고 있는 개발자입니다.
              </option>
            </FieldSelect>
          </div>
        </label>

        {/* 이메일(필수) */}
        <label htmlFor='user-email'>
          <StyledLabel>이메일(필수)</StyledLabel>
          <div>
            <StyldInput
              type='email'
              name='user-email'
              placeholder='이메일을 입력해주세요.'
              required
              onChange={handleChange}
            />
          </div>
        </label>

        {/* 자기소개(필수) */}
        <label htmlFor='user-introduce'>
          <StyledLabel>자기소개(필수)</StyledLabel>
          <div>
            <StyldTextarea
              name='user-introduce'
              placeholder='자기소개를 작성해주세요.'
              required
              onChange={handleChange}
            />
          </div>
        </label>

        {/* 사용 가능한 기술스택(필수) */}
        <label htmlFor='user-stacks'>
          <StyledLabel>사용 가능한 기술 스택(필수)</StyledLabel>
          <div>
            <StyldTextarea
              name='user-stacks'
              placeholder='기술 스택을 작성해주세요.'
              required
              onChange={handleChange}
            />
          </div>
        </label>

        <SubmitBtn type='button' value='시작하기' onClick={handleSubmit} />
      </FormWrapper>
      {/* </div> */}
    </RegisterWrapper>
  );
}

export default RegisterForm;
