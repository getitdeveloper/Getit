import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import UserIcon from '@assets/icons/user.svg';
import { HorizontalLine } from '@assets/styles/commons';
import StackInput from '@components/StackInput';
import {
  MainProfile,
  ProfileImage,
  PersonalInfoWrapper,
  ProfileRight,
  IntroWrapper,
  SubTitleWrapper,
  useStyles,
  PersonalInfo,
  SubmitButton,
} from './styles';
import Portfoilo from '../Portfolio';
import Project from '../Project';

function MyProfile() {
  const classes = useStyles();
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const [intro, setIntro] = useState(profileInfo.info);
  const [nickname, setNickname] = useState(profileInfo.nickname);
  const [email, setEmail] = useState(profileInfo.email);
  const [job, setJob] = useState(profileInfo.job);
  const [stacks, setStacks] = useState(profileInfo.stack);

  const onChange = (e: any) => {
    const { name, value } = e.target;
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

  const onSubmit = () => {
    alert('update profile info');
  };

  return (
    <ProfileRight>
      <MainProfile>
        <ProfileImage src={UserIcon} alt='profileImage' />
        {/* {profileDummyData.img ? (
            <ProfileImage src={profileDummyData.img} alt='profileImage' />
          ) : (
            
          )} */}
        <div>
          <PersonalInfoWrapper>
            닉네임{' '}
            <PersonalInfo
              name='nickname'
              value={nickname}
              onChange={onChange}
            />
          </PersonalInfoWrapper>
          <PersonalInfoWrapper>
            이메일{' '}
            <PersonalInfo name='email' value={email} onChange={onChange} />
          </PersonalInfoWrapper>
          <PersonalInfoWrapper>
            {' '}
            직업 <PersonalInfo
              name='job'
              value={job}
              onChange={onChange}
            />{' '}
          </PersonalInfoWrapper>
        </div>
      </MainProfile>

      <IntroWrapper name='intro' value={intro} onChange={onChange} />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>기술스택</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>

      <StackInput
        initialStacks={stacks}
        setInitialStacks={setStacks}
        placeHolder=''
      />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>포트폴리오</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Portfoilo />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>프로젝트 현황</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>완료된 프로젝트</p>
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
