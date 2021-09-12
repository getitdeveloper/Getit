import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import {
  SplittedPageContainer,
  ContentContainer,
  ProfileRight,
  ProfileLeft,
  InfoContainer,
  SubTitle,
  ProfileImage,
  MainProfile,
  ProfileNavItem,
  useStyles,
} from './styles';
import Portfoilo from '../Portfolio';
import Project from '../Project';
import { navItem } from './navTypes';

function ProfileDetail(props: any) {
  const { profileInfo } = props;
  const history = useHistory();
  const classes = useStyles();

  const onHandleNavigation = (content: any) => {
    if (content.actionType === 'alert') {
      alert(content.message);
    } else if (content.actionType === 'push' && content.url) {
      return history.push(content.url);
    }
  };
  return (
    <SplittedPageContainer>
      <ProfileLeft>
        <MainProfile>
          <ProfileImage src='/icons/user.svg' alt='profileImage' />
          {/* {profileDummyData.img ? (
            <ProfileImage src={profileDummyData.img} alt='profileImage' />
          ) : (
            
          )} */}
          <ContentContainer>닉네임 {profileInfo.nickname}</ContentContainer>
          <ContentContainer>이메일 {profileInfo.email}</ContentContainer>
          <ContentContainer> 직업 {profileInfo.job} </ContentContainer>
        </MainProfile>
        <hr
          style={{
            border: '1px solid #e4e4e4',
            width: '100%',
            marginTop: '30%',
            marginBottom: '15%',
          }}
        />
        {navItem.map((content) => (
          <ProfileNavItem
            key={content.menu}
            onClick={() => onHandleNavigation(content)}
          >
            {content.menu}
          </ProfileNavItem>
        ))}
      </ProfileLeft>
      <hr
        style={{
          borderTop: '1px solid #e4e4e4',
          height: 'auto',
        }}
      />
      <ProfileRight>
        <InfoContainer>{profileInfo.info}</InfoContainer>
        <SubTitle>기술스택</SubTitle>
        {profileInfo.stack?.map((content: string) => (
          <Chip label={content} key={content} className={classes.chip} />
        ))}
        <SubTitle>포트폴리오</SubTitle>
        <Portfoilo />
        <SubTitle>프로젝트 현황</SubTitle>
        <Project />
        <SubTitle>완료된 프로젝트</SubTitle>
        <Project finished />
      </ProfileRight>
    </SplittedPageContainer>
  );
}

export default ProfileDetail;
