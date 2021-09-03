import * as React from 'react';
import { useState, useCallback } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import {
  RegisterWrapper,
  Logo,
  Title,
  Form,
  DivideSection,
  NicknameWrapper,
  StyledLabel,
  NicknameInput,
  EmailInput,
  DoubleCheckBtn,
  FieldSelect,
  StyldTextarea,
  SubmitBtn,
  ErrorMessage,
  ErrorMessageTextarea,
  SelectArrowBtn,
  TextCount,
} from './styles';
import LogoSvg from './Logo.svg';
import SelectSvg from './Select.svg';

function RegisterForm(): JSX.Element {
  const history = useHistory();
  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  // TODO 백엔드 연결하고 setDuplicateCheck 설정하기
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [duplicateCheckError, setDuplicateCheckError] = useState(false);
  const [field, setField] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [level, setLevel] = useState('');
  const [levelError, setLevelError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [introduce, setIntroduce] = useState('');
  const [introduceError, setIntroduceError] = useState(false);
  const [stacks, setStacks] = useState('');
  const [stacksError, setStacksError] = useState(false);

  // 기존 회원 또는 비회원 접근 방지 라우팅
  React.useEffect(() => {
    if (message !== 'register') {
      return history.push('/');
    }
  }, []);

  // 회원가입시 입력값 체크
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      // 닉네임 길이 체크
      if (nickname.length < 6 || nickname.length > 10) {
        setNicknameError(true);
      }
      // 닉네임 중복 확인 (nickname 입력 에러가 없는 경우 체크)
      if (
        !(nickname.length < 6 || nickname.length > 10) &&
        duplicateCheck === false
      ) {
        return setDuplicateCheckError(true);
      }
      // 분야 선택 유무 체크
      if (field === '') {
        setFieldError(true);
      }
      // 레벨 (분야 선택한 경우 에러 체크)
      if (!(field === '') && level === '') {
        setLevelError(true);
      }
      // 이메일 입력 우뮤 체크
      if (email === '') {
        setEmailError(true);
      }
      // 자기소개 입력 유무 체크
      if (introduce === '') {
        setIntroduceError(true);
      }
      // 사용 가능한 기술 스택 입력 유무 체크
      if (stacks === '') {
        return setStacksError(true);
      }

      // 마지막으로 모든 에러가 없는지 체크
      if (
        nickname === '' ||
        field === '' ||
        email === '' ||
        introduce === '' ||
        stacks === '' ||
        nicknameError === true ||
        duplicateCheckError === true ||
        fieldError === true ||
        levelError === true ||
        emailError === true ||
        introduceError === true ||
        stacksError === true
      ) {
        return null;
      }

      // 쉼표로 기술 구분
      const stacksSplitList = stacks.split(',');
      // 문자열 앞 뒤 white space(공백) 제거
      const removeWhiteSpaceList = stacksSplitList.map((stack) =>
        stack.replaceAll(/^\s+|\s+$/gm, ''),
      );
      // 쉼표만 나열한 경우 stack 목록에 미포함하도록 제거
      const resultStackList = removeWhiteSpaceList.filter(
        (stack) => stack.length >= 1,
      );

      const data = {
        nickname,
        field,
        level,
        email,
        introduce,
        stacks: resultStackList,
      };

      console.log(data);

      // dispatch({
      //   type: SIGN_UP_REQUEST,
      //   data: { email, password, nickname },
      // });
    },
    [
      nickname,
      nicknameError,
      duplicateCheck,
      duplicateCheckError,
      field,
      fieldError,
      level,
      levelError,
      email,
      emailError,
      introduce,
      introduceError,
      stacks,
      stacksError,
    ],
  );

  const handleChange = useCallback(
    (event) => {
      const selectInput = event.target.name;
      switch (selectInput) {
        case 'user-nickname':
          setNickname(event.target.value);
          setDuplicateCheck(false);
          // 닉네임 길이제한
          if (event.target.value.length < 6 || event.target.value.length > 10) {
            return setNicknameError(true);
          }
          setNicknameError(false);
          break;
        case 'user-field':
          setField(event.target.value);
          setFieldError(false);
          break;
        case 'user-level':
          setLevel(event.target.value);
          setLevelError(false);
          break;
        case 'user-email':
          setEmail(event.target.value);
          setEmailError(false);
          break;
        case 'user-introduce':
          setIntroduce(event.target.value);
          setIntroduceError(false);
          break;
        case 'user-stacks':
          setStacks(event.target.value);
          setStacksError(false);
          break;
        default:
          return null;
      }
    },
    [nickname, duplicateCheck, field, level, email, introduce, stacks],
  );

  const handleSpacebar = useCallback((event) => {
    if (event.key === ' ') {
      event.preventDefault();
      alert('공백은 사용할 수 없습니다.');
    }
  }, []);

  const handleDoubleCheck = useCallback(() => {
    setDuplicateCheck(true);
    setDuplicateCheckError(false);
  }, []);

  return (
    <RegisterWrapper>
      <Logo>
        <Link to='/'>
          <img src={LogoSvg} alt='logo' />
        </Link>
      </Logo>

      <Title>회원가입</Title>

      <Form>
        {/* 닉네임(필수) */}
        <DivideSection>
          <label htmlFor='user-nickname'>
            <StyledLabel>닉네임(필수)</StyledLabel>
            <NicknameWrapper>
              <NicknameInput
                type='text'
                name='user-nickname'
                placeholder='닉네임을 입력해주세요.'
                required
                onChange={handleChange}
                onKeyDown={handleSpacebar}
                value={nickname}
              />
              {/* 중복 확인 버튼 */}
              <DoubleCheckBtn
                type='button'
                value='중복확인'
                onClick={handleDoubleCheck}
              />
            </NicknameWrapper>
          </label>
          {nicknameError && (
            <ErrorMessage>닉네임은 6자 ~ 10자로 입력해야 합니다.</ErrorMessage>
          )}
          {duplicateCheckError && (
            <ErrorMessage>닉네임 중복확인을 해주세요!</ErrorMessage>
          )}
        </DivideSection>

        {/* 분야(필수) */}
        <DivideSection>
          <label htmlFor='user-field'>
            <StyledLabel>분야(필수)</StyledLabel>
            {/* <ArrowImg> */}
            <SelectArrowBtn>
              <img src={SelectSvg} alt='select arrow button' />
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
                <option value='productManger'>기획자</option>
              </FieldSelect>
            </SelectArrowBtn>
            {/* </ArrowImg> */}
          </label>
          {fieldError && <ErrorMessage>분야를 선택해주세요!</ErrorMessage>}
        </DivideSection>

        {/* 레벨(필수) 분야 선택시 알맞은 선택 폼이 출력 */}
        <DivideSection>
          {field && (
            <label htmlFor='user-level'>
              <StyledLabel>레벨(필수)</StyledLabel>
              <SelectArrowBtn>
                <img src={SelectSvg} alt='select arrow button' />
                <FieldSelect
                  name='user-level'
                  form='myForm'
                  required
                  onChange={handleChange}
                >
                  {field !== 'developer' ? (
                    <>
                      <option value='description' disabled selected>
                        레벨을 선택해주세요.
                      </option>
                      <option value='하수'>
                        하수: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
                      </option>
                      <option value='중수'>
                        중수: 협업 경험이 있으며 다른 사용자들과 협업을 진행할
                        수 있습니다.
                      </option>
                      <option value='고수'>
                        고수: 현재 실무에서 종사하고 있습니다.
                      </option>
                    </>
                  ) : (
                    <>
                      <option value='description' disabled selected>
                        레벨을 선택해주세요.
                      </option>
                      <option value='코린이'>
                        코린이: 협업 경험은 없고 개인 프로젝트만
                        진행해보았습니다.
                      </option>
                      <option value='코등학생'>
                        코등학생: 협업 경험이 없지만 API를 사용해 협업을 진행할
                        수 있습니다.
                      </option>
                      <option value='코대생'>
                        코대생: 협업 경험이 있고 API를 자유자재로 다룰수
                        있습니다.
                      </option>
                      <option value='코드닌자'>
                        코드닌자: 현재 실무에서 종사하고 있는 개발자입니다.
                      </option>
                    </>
                  )}
                </FieldSelect>
              </SelectArrowBtn>
            </label>
          )}
          {levelError && <ErrorMessage>레벨을 선택해주세요!</ErrorMessage>}
        </DivideSection>

        {/* 이메일(필수) */}
        <DivideSection>
          <label htmlFor='user-email'>
            <StyledLabel>이메일(필수)</StyledLabel>
            <div>
              <EmailInput
                type='email'
                name='user-email'
                placeholder='이메일을 입력해주세요.'
                required
                onChange={handleChange}
                onKeyDown={handleSpacebar}
              />
            </div>
          </label>
          {emailError && <ErrorMessage>이메일을 입력해주세요!</ErrorMessage>}
        </DivideSection>

        {/* 자기소개(필수) */}
        <DivideSection>
          <label htmlFor='user-introduce'>
            <StyledLabel>자기소개(필수)</StyledLabel>
            <div>
              <StyldTextarea
                name='user-introduce'
                placeholder='자기소개를 작성해주세요.'
                required
                onChange={handleChange}
                maxLength={500}
              />
              <TextCount>{introduce.length}/ 500</TextCount>
            </div>
          </label>
          {introduceError && (
            <ErrorMessageTextarea>
              자기소개를 작성해주세요!
            </ErrorMessageTextarea>
          )}
        </DivideSection>

        {/* 사용 가능한 기술스택(필수) */}
        <DivideSection>
          <label htmlFor='user-stacks'>
            <StyledLabel>사용 가능한 기술 스택(필수)</StyledLabel>
            <div>
              <StyldTextarea
                name='user-stacks'
                placeholder='기술 스택을 작성해주세요. 쉼표로 구분해서 작성해주세요.'
                required
                onChange={handleChange}
                maxLength={500}
              />
            </div>
          </label>
          {stacksError && (
            <ErrorMessageTextarea>
              사용 가능한 기술 스택 작성해주세요!
            </ErrorMessageTextarea>
          )}
        </DivideSection>

        {/* 시작하기 (회원가입 완료)버튼 */}
        <SubmitBtn type='button' value='시작하기' onClick={handleSubmit} />
      </Form>
    </RegisterWrapper>
  );
}

export default RegisterForm;
