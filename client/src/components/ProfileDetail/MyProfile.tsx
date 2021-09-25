import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import UserImg from '@assets/icons/user.svg';
import { HorizontalLine } from '@assets/styles/commons';
import {
  MainProfile,
  ProfileImage,
  PersonalInfoWrapper,
  ProfileRight,
  IntroWrapper,
  SubTitleWrapper,
  useStyles,
} from './styles';
import Portfoilo from '../Portfolio';
import Project from '../Project';

function MyProfile() {
  const classes = useStyles();
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );

  return (
    <ProfileRight>
      <MainProfile>
        <ProfileImage src={UserImg} alt='profileImage' />
        {/* {profileDummyData.img ? (
            <ProfileImage src={profileDummyData.img} alt='profileImage' />
          ) : (
            
          )} */}
        <div>
          <PersonalInfoWrapper>
            닉네임 {profileInfo.nickname}
          </PersonalInfoWrapper>
          <PersonalInfoWrapper>이메일 {profileInfo.email}</PersonalInfoWrapper>
          <PersonalInfoWrapper> 직업 {profileInfo.job} </PersonalInfoWrapper>
        </div>
      </MainProfile>

      <IntroWrapper>{profileInfo.info}</IntroWrapper>

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>기술스택</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      {profileInfo.stack?.map((content: string) => (
        <Chip label={content} key={content} className={classes.chip} />
      ))}

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
    </ProfileRight>
  );
}
export default MyProfile;
