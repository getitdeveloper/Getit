import React, { useState, useEffect, useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  USER_PROFILE_EDIT_REQUEST,
  PORTFOLIO_LIST_REQUEST,
} from '@reducers/actions';
import UserImg from '@assets/images/user.svg';
import { HorizontalLine } from '@assets/styles/commons';
import StackInput from '@components/StackInput';
import LoadingSpinner from '@components/LoadingSpinner';
import Portfoilo from '@components/Portfolio';
import Project from '@components/Project';
import {
  MainProfile,
  ProfileWrapper,
  ButtonWrapper,
  ProfileImage,
  PersonalInfo,
  PersonalInfoWrapper,
  ProfileRight,
  IntroWrapper,
  SubTitleWrapper,
  SubmitButton,
  BoundaryText,
} from './styles';
import { IUpdatedProfileInfo } from './types';

function MyProfile(): JSX.Element {
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const portfolioList = useSelector(
    (state: RootStateOrAny) => state.user.portfolioList,
  );
  const dispatch = useDispatch();
  const [intro, setIntro] = useState(profileInfo.info);
  const [editedNickname, setNickname] = useState(profileInfo.nickname);
  const [editedEmail, setEmail] = useState(profileInfo.email);
  const [editedJob, setJob] = useState(profileInfo.job);
  const [editedStacks, setStacks] = useState(profileInfo.stack);

  useEffect(() => {
    dispatch({
      type: PORTFOLIO_LIST_REQUEST,
      data: {
        user_pk: profileInfo.user_pk,
      },
    });
  }, []);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'job':
        setJob(value);
        break;
      case 'intro':
        setIntro(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = useCallback(() => {
    if (
      intro === '' ||
      editedNickname === '' ||
      editedEmail === '' ||
      editedJob === ''
    ) {
      return alert('닉네임, 이메일, 직업, 자기소개 부분은 빈칸일 수 없습니다!');
    }
    const updatedProfileInfo: IUpdatedProfileInfo = {
      user: profileInfo.user,
      user_pk: profileInfo.user_pk,
      nickname: editedNickname,
      job: editedJob,
      level: '',
      email: editedEmail,
      info: intro,
      git: profileInfo.git,
      stack: editedStacks,
    };

    dispatch({
      type: USER_PROFILE_EDIT_REQUEST,
      data: {
        updatedProfile: updatedProfileInfo,
        user_pk: String(profileInfo.user_pk),
      },
    });
  }, [
    intro,
    editedNickname,
    editedEmail,
    editedJob,
    editedStacks,
    profileInfo,
  ]);

  if (!portfolioList) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileRight>
      <MainProfile>
        <ProfileWrapper>
          <ProfileImage src={UserImg} alt='profileImage' />
          <ButtonWrapper>
            <button type='submit'>수정</button>
            <button type='submit'>삭제</button>
          </ButtonWrapper>
        </ProfileWrapper>
        <PersonalInfoWrapper>
          <PersonalInfo>
            <div>
              <label htmlFor='nickname'>닉네임</label>
              <input
                id='nickname'
                name='nickname'
                value={editedNickname}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='nickname'>이메일</label>
              <input name='email' value={editedEmail} onChange={onChange} />
            </div>
            <div>
              <label htmlFor='nickname'>직업</label>
              <input name='job' value={editedJob} onChange={onChange} />
            </div>
          </PersonalInfo>
        </PersonalInfoWrapper>
      </MainProfile>

      <div>
        <IntroWrapper name='intro' value={intro} onChange={onChange} />
      </div>
      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>기술스택</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>

      <StackInput initialStacks={editedStacks} setInitialStacks={setStacks} />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>포트폴리오</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      {portfolioList && <Portfoilo portfolioList={portfolioList} />}

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>프로젝트 현황</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>완료 프로젝트</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project finished />

      <SubmitButton type='button' onClick={onSubmit}>
        저장하기
      </SubmitButton>
    </ProfileRight>
  );
}
export default MyProfile;
