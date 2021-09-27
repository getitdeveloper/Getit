import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import LogoImg from '@assets/images/Logo.svg';
import SelectImg from '@assets/images/Select.svg';
import { IRegisterData } from './types';
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
  SelectWrapper,
  TextCount,
} from './styles';

import {
  USER_NICK_DOUBLECHECK_REQUEST,
  USER_NICK_DOUBLECHECK_RESET,
  USER_PROFILE_REGISTER_REQUEST,
  USER_REGISTER_RESET,
} from '../../reducers/actions';
import OptionDev from './OptionDev';
import OptionDesign from './OptionDesign';
import OptionPM from './OptionPM';

function RegisterForm(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  const message: string = useSelector(
    (state: RootStateOrAny) => state.user.id.message,
  );
  const nickDoubleCheck: string = useSelector(
    (state: RootStateOrAny) => state.user.nickDoubleCheck.duplicate,
  );
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;

  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [duplicateCheckError, setDuplicateCheckError] = useState(false);
  const [field, setField] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [level, setLevel] = useState('');
  const [levelError, setLevelError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [introduce, setIntroduce] = useState('');
  const [introduceError, setIntroduceError] = useState(false);
  const [stacks, setStacks] = useState('');
  const [stacksError, setStacksError] = useState(false);

  useEffect(() => {
    // 기존 회원 또는 비회원 접근 방지 라우팅
    if (message !== 'register') {
      return history.push('/');
    }

    // 닉네임 중복 확인 체크
    if (nickDoubleCheck === 'pass') {
      setDuplicateCheck(true);
      setDuplicateCheckError(false);
      return alert('사용 가능한 닉네임 입니다.');
    }
    if (nickDoubleCheck === 'fail') {
      setDuplicateCheck(false);
      setDuplicateCheckError(true);
      return alert('이미 사용 중인 닉네임입니다.');
    }
  }, [nickDoubleCheck, message]);

  // 회원가입 폼 제출 시 입력값 체크
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
      // 이메일 형식 validation 확인
      if (!(email === '') && emailValidationError) {
        setEmailValidationError(true);
      }
      // 자기소개 입력 유무 체크
      if (introduce === '') {
        setIntroduceError(true);
      }
      // 사용 가능한 기술 스택 입력 유무 체크
      if (stacks.length === 0) {
        return setStacksError(true);
      }

      // 마지막으로 모든 에러가 없는지 체크
      if (
        nickname === '' ||
        field === '' ||
        level === '' ||
        email === '' ||
        introduce === '' ||
        stacks.length === 0 ||
        nicknameError === true ||
        duplicateCheck === false ||
        duplicateCheckError === true ||
        fieldError === true ||
        levelError === true ||
        emailError === true ||
        emailValidationError === true ||
        introduceError === true ||
        stacksError === true
      ) {
        return alert('모든 항목을 작성해 주세요.');
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

      const data: IRegisterData = {
        user: userId,
        user_pk: userId,
        nickname,
        job: field,
        level,
        email,
        info: introduce,
        stack: resultStackList,
      };

      // console.log(data);

      // 회원 가입 요청
      dispatch({
        type: USER_PROFILE_REGISTER_REQUEST,
        data,
      });
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
      emailValidationError,
      introduce,
      introduceError,
      stacks,
      stacksError,
    ],
  );

  const handleChangeNickname = useCallback(
    (event) => {
      setNickname(event.target.value);
      setDuplicateCheck(false);
      // 중복확인 후 입력시 중복확인 초기화
      dispatch({
        type: USER_NICK_DOUBLECHECK_RESET,
        data: {
          nickname: null,
        },
      });
      // 닉네임 길이제한
      if (event.target.value.length < 6 || event.target.value.length > 10) {
        return setNicknameError(true);
      }
      setNicknameError(false);
    },
    [nickname, nicknameError, duplicateCheck, duplicateCheckError],
  );

  const handleChangeField = useCallback(
    (event) => {
      setField(event.target.value);
      setFieldError(false);
      // field가 변경되는 경우 level값 초기화
      setLevel('');
    },
    [field, fieldError],
  );

  const handleChangeLevel = useCallback(
    (event) => {
      setLevel(event.target.value);
      setLevelError(false);
    },
    [level, levelError],
  );

  const handleChangeEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
      setEmailError(false);

      // 이메일 형식 validation 확인
      const emailValidationRegexp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const emailValidation = emailValidationRegexp.test(event.target.value);

      if (!emailValidation) {
        return setEmailValidationError(true);
      }
      setEmailValidationError(false);
    },
    [email, emailError, emailValidationError],
  );

  const handleChangeIntroduce = useCallback(
    (event) => {
      setIntroduce(event.target.value);
      setIntroduceError(false);
    },
    [introduce, introduceError],
  );
  const handleChangeStacks = useCallback(
    (event) => {
      setStacks(event.target.value);
      setStacksError(false);
    },
    [stacks, stacksError],
  );

  const handleSpacebar = useCallback((event) => {
    if (event.key === ' ') {
      event.preventDefault();
      alert('공백은 사용할 수 없습니다.');
    }
  }, []);

  const handleDoubleCheck = useCallback(() => {
    // 닉네임 6 ~ 10자 미충족시 에러 메세지 출력
    if (nickname.length < 6 || nickname.length > 10) {
      return setNicknameError(true);
    }
    if (nickDoubleCheck === 'pass') {
      return alert('사용 가능한 닉네임 입니다.');
    }
    // 닉네임 6 ~ 10자 충족시에만 중복확인 요청
    dispatch({
      type: USER_NICK_DOUBLECHECK_REQUEST,
      data: {
        nickname,
      },
    });
  }, [nickname, nickDoubleCheck]);

  const handleRouting = useCallback(() => {
    dispatch({
      type: USER_REGISTER_RESET,
    });
  }, []);

  return (
    <RegisterWrapper>
      <Logo onClick={handleRouting}>
        <Link to='/'>
          <img src={LogoImg} alt='logo' />
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
                onChange={handleChangeNickname}
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
            <SelectWrapper>
              <img src={SelectImg} alt='select arrow button' />
              <FieldSelect
                name='user-field'
                required
                onChange={handleChangeField}
              >
                <option value='description-field' disabled selected>
                  분야를 선택하세요.
                </option>
                <option value='개발자'>개발자</option>
                <option value='디자이너'>디자이너</option>
                <option value='기획자'>기획자</option>
              </FieldSelect>
            </SelectWrapper>
            {/* </ArrowImg> */}
          </label>
          {fieldError && <ErrorMessage>분야를 선택해주세요!</ErrorMessage>}
        </DivideSection>

        {/* 레벨(필수) 분야 선택시 알맞은 선택 폼이 출력 */}
        <DivideSection>
          {field && (
            <div>
              {/* 각각 작성하지않으면 field값 변경시 input값이 제대로 최기화 되어 보여지지 않음 */}
              {field === '개발자' && (
                <OptionDev
                  field={field}
                  image={SelectImg}
                  handleChange={handleChangeLevel}
                />
              )}
              {field === '디자이너' && (
                <OptionDesign
                  field={field}
                  image={SelectImg}
                  handleChange={handleChangeLevel}
                />
              )}
              {field === '기획자' && (
                <OptionPM
                  field={field}
                  image={SelectImg}
                  handleChange={handleChangeLevel}
                />
              )}
            </div>
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
                onChange={handleChangeEmail}
                onKeyDown={handleSpacebar}
              />
            </div>
          </label>
          {emailError && <ErrorMessage>이메일을 입력해주세요!</ErrorMessage>}
          {emailValidationError && (
            <ErrorMessage>제대로된 이메일 형식이 아닙니다!</ErrorMessage>
          )}
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
                onChange={handleChangeIntroduce}
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
                onChange={handleChangeStacks}
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
